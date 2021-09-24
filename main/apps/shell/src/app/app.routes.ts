import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { startsWith } from "./router.utils";
import { WrapperComponent } from "./wrapper/wrapper.component";

export const SHELL_ROUTES: Routes = [
    // { path: '', component: HomeComponent ,pathMatch: 'full' },
  {
    path: '',
    component: WrapperComponent, data: {importName: 'marketing', elementName: 'marketing-element'},
    pathMatch: 'full'
  },
  //{ matcher: startsWith('marketing'), component: WrapperComponent, data: { importName: 'marketing', elementName: 'marketing-element' }},
  {
    path: 'appOne',
    loadChildren: () => import('@appOne/app.module').then(m => m.AppOneModule),
    pathMatch: 'full'
  }
];


