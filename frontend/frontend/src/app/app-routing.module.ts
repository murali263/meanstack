import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { CategoryFormComponent } from './pages/category-form/category-form.component';

const routes: Routes = [{
  path: 'home',
  component: HomePageComponent
}, {
  path: 'products',
  component: ProductListComponent

},
{
  path:'dashboard',
  component:DashboardComponent
 },
 {
   path:'categories',
   component:CategoriesComponent
 },
 {
   path:'form',
   component:CategoryFormComponent
 }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
