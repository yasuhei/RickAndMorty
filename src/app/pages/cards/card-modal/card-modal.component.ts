import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from 'src/service/dashboard.service';
import { CardsComponent, DataApi } from '../cards.component';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  sent: boolean = false;
  name!: string;
  episode = [];
  constructor(
    private dashboard: DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: any,

    ) {

  }

  ngOnInit() {
console.log(this.data)

  }



}
