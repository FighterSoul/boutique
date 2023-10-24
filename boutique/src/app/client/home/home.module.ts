import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductsComponent } from './home-products/home-products.component';


@NgModule({
  declarations: [
    HomeBannerComponent,
    HomeProductDetailComponent,
    HomeProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
export class HomeComponent{ }
