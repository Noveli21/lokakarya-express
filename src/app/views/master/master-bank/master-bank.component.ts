import { Component,  OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-master-bank',
  templateUrl: './master-bank.component.html',
  styleUrls: ['./master-bank.component.scss']
})

export class MasterBankComponent implements OnInit {
  masterBank: any[] = [];

  constructor(public service: ApiService) {}

  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.service.getMasterBank().subscribe((res: any) => {
      this.masterBank = res.data.data;
    })
  }
}
