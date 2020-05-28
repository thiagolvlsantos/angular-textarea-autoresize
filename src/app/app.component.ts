import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Autoresize <textarea> in Angular ' + VERSION.full;
  size = 25;

  up() {
    //nothing
  }
}
