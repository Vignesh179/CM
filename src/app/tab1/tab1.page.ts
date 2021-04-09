import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  p: number = 1;
  categoryName = '';
  categoryStatus: any;
  categoryDate: any;
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
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    // status: new FormControl(null, [Validators.required]),
    // date: new FormControl(null, [Validators.required]),
  })
  //Insert
  saveCategory() {
    this.API.post('http://localhost/cm/create_category.php',
      {
        name: this.categoryName,
        status: this.categoryStatus,
        date: this.categoryDate,
      }).then(() => {
        this.loadData();
        this.alert = true;
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
  }
  //Update
  updateCategory() {
    this.API.post(`http://localhost/cm/update_category.php`,
      {
        id: this.id,
        name: this.categoryName,
        date: this.categoryDate,
        status: this.categoryStatus,
      }).then(() => {
        this.loadData();
        this.updateMessage = true;
      })
  }
  //Edit
  editCategory(category: any) {
    this.UpdateButton = true;
    this.SaveButton = false;
    this.id = category.id
    this.categoryName = category.name,
      this.categoryDate = category.date,
      this.categoryStatus = category.status;
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
  //Reset
  resetForm() {
    this.categoryName = '';
    this.categoryStatus = '';
    this.categoryDate = '';
    this.SaveButton = true;
    this.UpdateButton = false;
  }
  //Close Alert
  closeAlert() {
    this.alert = false;
    this.updateMessage = false;
  }
}
