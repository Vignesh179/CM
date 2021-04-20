import { Component, OnInit, Input, SecurityContext } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imagesrc: any;
  img1: any;
  constructor() { }
//   imagee() {
//     this.sanitizer.sanitize(SecurityContext.STYLE, 'url(' + this.imagesrc + ')');
//   }
  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    console.log(file);
  }
}
