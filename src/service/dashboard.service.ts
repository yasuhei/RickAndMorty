import { DataApi } from './../app/pages/cards/cards.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const  api = 'https://rickandmortyapi.com/api'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

//tras todas informacoes
  getRick() {
      return  this.http.get(`${api}/character`)
  }

//filtro
// getFilter(name: any = '', status: any = '') {
//   return this.http.get(`${api}/character/?name=${name}&status=${status}`)
// }

getFilter(params: any) {
  let query = [] as string[];
  let {name, status} = params;


  if(name) {
    query.push(`name=${name}`);
  }

  if(status) {
    query.push(`status=${status}`)
  }

  return this.http.get(`${api}/character?${query.join('&')}`)
}
// https://rickandmortyapi.com/api/character/?name=rick&status=alive

  getAll() {
    return this.http.get(`${api}/character/`)
  }




}
