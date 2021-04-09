import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  p: number = 1;
  categoryName = '';
  categoryStatus: any;
  categoryDate: any;
  categoryinTime: any;
  categoryoutTime: any;
  SaveButton: any;
  UpdateButton: any;
  id: any;
  categories: any = [];
  alert: boolean = false;
  updateMessage: boolean = false;
  constructor(private API: ApiService) {
    this.loadData();
    this.SaveButton = true
  }
  ngOnInit() {
    this.loadData();
  }
  //Fetch
  async loadData() {
    try {
      var res: any = await this.API.get(`http://localhost/cm/index.php`);
      console.log('Response is ', res);
      this.categories = res;
    } catch (e) {
      alert("Fetch error")
      console.log('Error', e);
    }
  }
  //Delete
  deleteCategory(id: any) {
    if (confirm("Are you sure? You want to remove the record?")) {
      this.API.deleteCategory(id).subscribe(() => {
        this.loadData();
      });
    }
  }
  //Edit
  editCategory(category: any) {
    this.UpdateButton = true;
    this.SaveButton = false;
    this.id = category.id,
      this.categoryName = category.name,
      this.categoryDate = category.date,
      this.categoryStatus = category.status;
  }
  myfunc() {
    //alert("Testing");
  }
}