import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiryBalanceComponent } from './inquiry-balance/inquiry-balance.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Master',
    },
    children: [
        {
            path: 'cek-saldo',
            component: InquiryBalanceComponent,
            data: {
                title: 'Cek Saldo',
            },
        },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
