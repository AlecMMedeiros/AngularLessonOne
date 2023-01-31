import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PageWithParamsComponent } from './page-with-params/page-with-params.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path: "", redirectTo: "first-page", pathMatch: "full"},
  {path: "first-page", component: FirstPageComponent},
  {path: "second-page", component: SecondPageComponent},
  {path: "page-with-params/:id", component: PageWithParamsComponent},
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
