import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeComponent } from './home/home.component';
import { SHELL_ROUTES } from './app.routes';
@NgModule({
  declarations: [AppComponent, WrapperComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(SHELL_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
