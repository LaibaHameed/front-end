import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentModuleRoutingModule } from './managment-module-routing.module';
import { ManagmentModuleComponent } from './managment-module.component';
import { UserLoginComponent } from './management-components/user-management/user-login/user-login.component';
import { UserRegisterComponent } from './management-components/user-management/user-register/user-register.component';
import { AdminRegisterComponent } from './management-components/admin-management/admin-register/admin-register.component';
import { AdminLoginComponent } from './management-components/admin-management/admin-login/admin-login.component';


@NgModule({
  declarations: [
    ManagmentModuleComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminRegisterComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    ManagmentModuleRoutingModule
  ]
})
export class ManagmentModuleModule { }

