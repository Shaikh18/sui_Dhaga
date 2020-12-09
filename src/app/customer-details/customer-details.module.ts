import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDetailsPageRoutingModule } from './customer-details-routing.module';

import { CustomerDetailsPage } from './customer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerDetailsPage]
})
export class CustomerDetailsPageModule { }
