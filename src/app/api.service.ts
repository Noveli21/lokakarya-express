import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})


export class ApiService {

  base_url = 'http://localhost:3535/api'

  constructor(private http: HttpClient) {}

  getMasterBank() {
    return this.http.get(`${this.base_url}/masterBank/getMasterBank`)
  }

}
