import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
