import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { InquiryBalanceComponent } from './inquiry-balance/inquiry-balance.component';


@NgModule({
  declarations: [
    InquiryBalanceComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
