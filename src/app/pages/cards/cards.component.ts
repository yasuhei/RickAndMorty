import { DashboardService } from './../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';


export interface DataApi {
  name: string;
  status:string;
  species: string;
  image: string;
  type: string;
  created: string;
  gender: string;
  location:any;
  origin: any;
  id: number;
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
  id!: number


  constructor(
    private dashboard: DashboardService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,


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

      })
  }


  filter() {
    let { name, status} =  this.filtro.getRawValue();
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
        this.data = success.results[0].id

        console.log(this.id)


      }
    )
  }

  openModal(id: number): void {
    let dialogRef = this.dialog.open(CardModalComponent, {
      panelClass: 'dialog-card',
      autoFocus: false,
      data: {
        id
      }
    })
    console.log(this.id)


  }

}
