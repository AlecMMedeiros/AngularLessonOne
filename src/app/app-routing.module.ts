import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PageWithParamsComponent } from './page-with-params/page-with-params.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path: "", redirectTo: "first-page", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "first-page", component: FirstPageComponent},
  {path: "second-page", component: SecondPageComponent},
  {path: "protected-page", component: ProtectedPageComponent, canActivate: [AuthGuard] },
  {path: "page-with-params/:id", component: PageWithParamsComponent},
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: "**",  component: NotFoundPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
