import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterBankComponent } from './master-bank/master-bank.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Master',
        },
        children: [
            {
                path: 'master-bank',
                component: MasterBankComponent,
                data: {
                    title: 'Master Bank',
                },
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MasterRoutingModule { }