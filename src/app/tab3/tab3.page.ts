import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, SecurityContext } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imagesrc:any;
  constructor(private sanitizer: DomSanitizer) {}
  imagee(){
    this.sanitizer.sanitize(SecurityContext.STYLE, 'url(' + this.imagesrc + ')');
  }
}
