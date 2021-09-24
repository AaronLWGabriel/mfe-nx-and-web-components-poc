import { Routes } from "@angular/router";
import { InfoComponent } from "./info/info.component";

export const APP_ONE_ROUTES: Routes = [
  { path: 'appOne', component: InfoComponent, pathMatch: 'full' }
];


