/**import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  cols: any[];
  patients: any[];

  constructor(private sharedService: SharedService, private titleService: Title) {
    this.titleService.setTitle("home");
  }

  ngOnInit(): void {
    this.getPatients();
    this.cols = [
      { field: 'userFullName', header: 'userFullName' },
      { field: 'userPhoneNumber', header: 'userPhoneNumber' },
      { field: 'age', header: 'age' },
      { field: 'gender', header: 'gender' },
      { field: 'maritalStatus', header: 'maritalStatus' },
      { field: 'allergies', header: 'allergies' },
      { field: 'specialPrecautions', header: 'specialPrecautions' }
    ];
  }

  getPatients() {
    console.log("hi");
    this.sharedService.getPatients(2).subscribe((res: any) => {
      Object.keys(res).map(r => {
        console.log({res});
        this.patients = res;
      });
    },
      error => {
        console.log("error ",error);
      });
  }

}
**/
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { VisitComponent } from '../visit/visit.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  cols: any[];
  patients: any[];
  constructor(private router: Router,private sharedService: SharedService, private titleService: Title) {
    this.titleService.setTitle("home");
  }

  ngOnInit(): void {
    this.getPatients();
    this.cols = [
      { field: 'userFullName', header: 'Full Name' },
      { field: 'userPhoneNumber', header: 'PhoneNumber' },
      { field: 'age', header: 'Age' },
      { field: 'gender', header: 'Gender' },
      { field: 'maritalStatus', header: 'Marital Status' },
      { field: 'allergies', header: 'Allergies' },
      { field: 'specialPrecautions', header: 'Special Precautions' }
    ];
  }

  getPatients() {
    this.sharedService.getPatients(3).subscribe((res: any) => {
      Object.keys(res).map(r => {
        this.patients = res;
      });
    },
      error => {
        console.log("error ",error);
      });
  }

  btnClick= function () {
    this.router.navigateByUrl('/new-patient');
};

addVisit(id:any){
  this.router.navigateByUrl('/new-visit/'+id);
}

getAllVisits(id:any){
this.router.navigateByUrl('/visits/'+id);

}
}