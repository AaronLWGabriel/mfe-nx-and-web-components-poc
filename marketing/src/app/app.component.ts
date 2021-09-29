import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marketing';
  ngVersion = require('../../package.json').dependencies['@angular/core'];
}
