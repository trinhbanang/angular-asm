import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slide/slide.component';
import { ServicesComponent } from './services/services.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, ServicesComponent, ProductManagerComponent, ProductListComponent, ProductComponent, NotFoundComponent, HomeComponent, ContactComponent, CategoryComponent, AddProductComponent, AboutComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
