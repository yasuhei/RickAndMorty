import { Component } from '@angular/core';
import { DashboardService } from 'src/service/dashboard.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
   ) {

  }

  ngOnInit(): void {




    // this.dashboard.getAll(this.data.name, this.data.status).subscribe(

    //   (success: any) => {
    //   this.data = success.results;

    //     console.log(success, 'aqui2')

    //   }
    // )
  }


}
