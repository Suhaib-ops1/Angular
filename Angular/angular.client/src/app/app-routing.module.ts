import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetCategoriesComponent } from './Admin/get-categories/get-categories.component';
import { GetProductsComponent } from './Admin/get-products/get-products.component';
import { AddcatgoriyComponent } from './Admin/addCatgory/addcatgoriy.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditcategoryComponent } from './Admin/editcategory/editcategory.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { ProfileComponent } from './User/profile/profile.component';

const routes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "Signup", component: SignupComponent },
  { path: "Categories", component: CategoriesComponent },
  { path: "products/:id", component: ProductsComponent },
  { path: "PID/:id", component: ProductdetailsComponent },
  { path: 'profile', component: ProfileComponent },

  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'getCategories', component: GetCategoriesComponent },
      { path: 'getProdacts', component: GetProductsComponent },
      { path: 'addCategory', component: AddcatgoriyComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: `editCategory/:id`, component: EditcategoryComponent },
      { path: `editProduct/:id`, component: EditproductComponent },
      
      
      { path: '', redirectTo: '/dashboard/getCategories', pathMatch: 'full' } // Default route
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
