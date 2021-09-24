import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LOAN_ROUTES } from './app.routes';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild(LOAN_ROUTES,)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
