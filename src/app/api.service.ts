import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})


export class ApiService {

  base_url = 'http://localhost:3535/api'

  constructor(private http: HttpClient) {}

  getMasterBank(params: any) {
    return this.http.get(`${this.base_url}/masterBank/getMasterBank`, { params: params })
  }

  createMasterBank(body: any) {
    return this.http.post(`${this.base_url}/masterBank/insertMasterBank`, body)
  }

  updateMasterBank(body: any) {
    return this.http.put(`${this.base_url}/masterBank/updateMasterBank`, body)
  }

  deleteMasterBank(body: any) {
    return this.http.delete(`${this.base_url}/masterBank/deleteMasterBank`, { body: body})
  }

}
