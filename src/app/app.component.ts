import { Component, VERSION,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'File upload in Angular ' + VERSION.full;
  filesToUpload: FileList = null;
  files: any[] = [];

  constructor(){
  }

  ngOnInit() {
  }

  handleFileInput(event: any) {
    let target = event.target as HTMLInputElement;
    this.filesToUpload = target.files;
    this.files = [];
    for(let i = 0; i < this.filesToUpload.length;i++) {
      let f = this.filesToUpload.item(i);
      this.files.push(f);
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.files[i].meta = f;
        this.files[i].content = fileReader.result;
      };
      fileReader.readAsText(this.files[i]);
    }
  }
}
