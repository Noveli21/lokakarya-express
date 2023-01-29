import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-master-bank',
  templateUrl: './master-bank.component.html',
  styleUrls: ['./master-bank.component.scss']
})

export class MasterBankComponent implements OnInit {
  masterBank: any[] = [];
  dataPost: any = {};

  params: any = {
    page: 1,
    size: 100,
  }
  label: any = '';
  valSearch: any = ''


  public openAdd = false;
  public openDelete = false;


  constructor(public service: ApiService) { }

  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.service.getMasterBank(this.params).subscribe((res: any) => {
      this.masterBank = res.data.data;
    })
  }

  toggleAdd() {
    this.dataPost = {}
    this.openAdd = !this.openAdd;
    this.label = 'Tambah'
  }

  toggleEdit(item: any) {
    const temp = this.masterBank.filter((el) => el.norek === item.norek)
    let dtEdit = {}
    if(temp && temp.length > 0) {
      dtEdit = {
        norek : temp[0].norek,
        nama : temp[0].nama,
        alamat : temp[0].alamat,
        notelp : temp[0].notelp,
        saldo : temp[0].saldo,
      }
    }
  
    this.label = 'Edit'
    this.dataPost = dtEdit
    this.openAdd = !this.openAdd
  }

  toggleDelete(item: any) {
    this.openDelete = !this.openDelete;
    this.service.deleteMasterBank({ norek: item.norek }).subscribe((res: any) => {
      if (res.data) {
        Swal.fire({
          title: 'Berhasil!',
          text: "Data Berhasil dihapus!",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.fetch()
          }
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: res.error_message.message,
          showConfirmButton: true,
          // timer: 1500
        })
      }
    }, () => {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Gagal, Terjadi Kesalahan",
        showConfirmButton: true,
        // timer: 1500
      })
    })
  }

  handleAddChange(event: boolean) {
    this.openAdd = event;
  }

  onSeacrh() {
    if(this.valSearch === '') {
      this.fetch()
    } else {
      this.masterBank = this.masterBank.filter((el) => el.norek === this.valSearch)
    }
  }

  onSubmit() {
    if (this.label === 'Tambah') {
      this.onSave()
    } else {
      this.onEdit()
    }
  }

  onSave() {
    let body = this.dataPost
    body.user_id = 1
    if (this.dataPost && this.dataPost.norek !== 0 && this.dataPost.name !== "") {
      this.service.createMasterBank(body).subscribe(() => {
        Swal.fire({
          title: 'Berhasil!',
          text: "Data Berhasil disimpan!",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.toggleAdd()
            this.fetch()
            this.dataPost = {}
          }
        })
      }, () => {
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: "Gagal, Terjadi Kesalahan",
          showConfirmButton: true,
          // timer: 1500
        })
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Gagal, Silahkan isi No, Rek dan Nama",
        showConfirmButton: true,
        // timer: 1500
      })
    }
  }

  onEdit() {
    let body = this.dataPost
    body.user_id = 1
    if (this.dataPost && this.dataPost.norek !== 0 && this.dataPost.name !== "") {
      this.service.updateMasterBank(body).subscribe(() => {
        Swal.fire({
          title: 'Berhasil!',
          text: "Data Berhasil disimpan!",
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.toggleAdd()
            this.fetch()
            this.dataPost = {}
          }
        })
      }, () => {
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: "Gagal, Terjadi Kesalahan",
          showConfirmButton: true,
          // timer: 1500
        })
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: "Gagal, Silahkan isi No, Rek dan Nama",
        showConfirmButton: true,
        // timer: 1500
      })
    }
  }
}
