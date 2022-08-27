import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './main-components/home/home.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductsComponent } from './main-components/view-products/view-products.component';
import { CheckoutComponent } from './main-components/checkout/checkout.component';
import { EditCardComponent } from './main-components/edit-card/edit-card.component';
import { PurchaseSuccessfulComponent } from './main-components/purchase-successful/purchase-successful.component';
import { PurchaseFailedComponent } from './main-components/purchase-failed/purchase-failed.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductsComponent,
    ViewProductsComponent,
    CheckoutComponent,
    EditCardComponent,
    PurchaseSuccessfulComponent,
    PurchaseFailedComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
