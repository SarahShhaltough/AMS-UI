import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMS-UI';
  constructor(private router: Router){}

  goToPatients(){
    this.router.navigate(['/patients']);
  }

  goToVisits(){}

  logout(){
    this.router.navigate(['/login']);
  }
}
