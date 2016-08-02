import { Component } from '@angular/core';

import { WebBannerComponent } from './../web-banner';

@Component({
  selector: 'web-home',
  providers: [],
  directives: [WebBannerComponent],
  pipes: [],
  styles: [require('./web-home.scss')],
  template: require('./web-home.html')
})
export class WebHomeComponent {

}
