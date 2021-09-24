import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ONE_ROUTES } from './app.routes';
import { InfoComponent } from './info/info.component';
@NgModule({
  declarations: [AppComponent, InfoComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild(APP_ONE_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export class AppOneModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule
    }
  }
}
