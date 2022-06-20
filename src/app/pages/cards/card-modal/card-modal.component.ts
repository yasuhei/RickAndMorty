import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from 'src/service/dashboard.service';
import { DataApi } from '../cards.component';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  sent: boolean = false;
  data = [] as DataApi[]
  episode = [];
  constructor(
    private dashboard: DashboardService,

    ) {

  }

  ngOnInit() {

    this.dashboard.getRick().subscribe(
      (success: any) => {
        this.data = success.results

      }
      )
  }



}
