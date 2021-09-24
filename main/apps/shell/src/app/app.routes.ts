import { Routes } from "@angular/router";
import { WrapperComponent } from "./wrapper/wrapper.component";

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    component: WrapperComponent, data: {importName: 'marketing', elementName: 'marketing-element'},
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('userApp/Module').then(m => m.AppModule),
    pathMatch: 'full'
  },
  {
    path: 'loan',
    loadChildren: () => import('loanApp/Module').then(m => m.AppModule),
    pathMatch: 'full'
  }
];


