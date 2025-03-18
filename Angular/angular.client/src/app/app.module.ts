import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { GetCategoriesComponent } from './Admin/get-categories/get-categories.component';
import { GetProductsComponent } from './Admin/get-products/get-products.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddcatgoriyComponent } from './Admin/addCatgory/addcatgoriy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    ProductsComponent,
    NavbarComponent,
    ProductdetailsComponent,
    GetCategoriesComponent,
    GetProductsComponent,
    AddProductComponent,
    AddcatgoriyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
