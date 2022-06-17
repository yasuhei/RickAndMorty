import { DashboardService } from './../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


export interface DataApi {
  name: string;
  status:string;
  species: string;
  image: string;
  type: string;
  created: string;
  gender: string;
  location:any;
  origin: any
}
export interface Locale {
  name:string;
}

export interface Location {
  name: string;
}
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  filtro!: FormGroup
  data = [] as DataApi[]
  location = [] as Location[]
  local?: string
  origin?: string
  panelOpen = false;
  resultsFilter = [] ;


  constructor(
    private dashboard: DashboardService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.filtro = this.formBuilder.group({
      name: [''],
      status: [''],
    })

    //tras todas informacoes
    this.dashboard.getRick().subscribe(
      (success: any) => {
        this.data = success.results
        this.local = success.results.location
        this.origin = success.results.origin

      }
    )
  }

  filter() {
    let { name, status, species, image,type,created,gender, location,origin  } =  this.filtro.getRawValue();
    let query: any = {};

    if(name) {
      query = { ...query, name}
    }
    if (status) {
      query = { ...query, status}
    }


    this.dashboard.getFilter(query).subscribe(
      (success: any) => {
        this.data = success.results
      }
    )

  }
  cleanFilter(): void {
    this.filtro.reset();
    this.getRick()

  }
   getRick() {
    this.dashboard.getRick().subscribe(
      (success: any) => {
        this.data = success.results

      }
    )
  }

}
