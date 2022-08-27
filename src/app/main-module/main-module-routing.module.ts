import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { CheckoutComponent } from './main-components/checkout/checkout.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { EditCardComponent } from './main-components/edit-card/edit-card.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { PurchaseFailedComponent } from './main-components/purchase-failed/purchase-failed.component';
import { PurchaseSuccessfulComponent } from './main-components/purchase-successful/purchase-successful.component';
import { ViewProductsComponent } from './main-components/view-products/view-products.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{
   path: '', component: MainModuleComponent,
   children:[
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'products', component:ProductsComponent},
    {path:'view-product', component:ViewProductsComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'edit-card', component:EditCardComponent},
    {path:'purchase-failed', component:PurchaseFailedComponent},
    {path:'purchase-successful', component:PurchaseSuccessfulComponent}

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainModuleRoutingModule {}
