import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'mode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly title = 'shell';

  ngVersion = require('../../../../package.json').dependencies['@angular/core'];
}
