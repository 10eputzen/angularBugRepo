import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'angularBugRepo';
  allItems: any = [];


  constructor(private dataService: DataService) {
    effect(() => {
      this.allItems = this.dataService.allData$();
      console.log(this.allItems);
    });
    this.dataService.getDataFromCollection();
  }

  async mockData() {
    await this.dataService.addDocToCollection({ name: 'Test Entry', description: 'Just some Text' });
  }
  async deleteData(id: string) {
    await this.dataService.deleteDocument(id);
  }

}
