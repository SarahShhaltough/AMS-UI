import { Component, OnInit } from '@angular/core';
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
