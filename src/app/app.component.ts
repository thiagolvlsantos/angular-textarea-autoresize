import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Autoresize <textarea> in Angular ' + VERSION.full;
  size = 20;

  rows(str: string) {
    let tmp = Math.floor(str.length/this.size);
    return tmp == 0 ? 1 : tmp + 2;
  }
}
