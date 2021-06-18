import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patientForm: FormGroup;
  educationList : any =[] ;
  constructor(private router: Router,private sharedService: SharedService,) { }

  initializeUserForm(){
    this.patientForm = new FormGroup({
      userFullName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
      userPhoneNumber: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      allergies: new FormControl('', Validators.required),
      specialPrecautions: new FormControl('', Validators.required),
      pastHistory: new FormControl('', Validators.required),
      familyHistory: new FormControl('', Validators.required)
    });
  }

  get f() { return this.patientForm.controls; }

  ngOnInit(): void {
    this.initializeUserForm();
    this.educationList = [{'value': '1', "viewValue":"xxx"}, {'value': '2', "viewValue":"yyy"}];
    console.log("list ", this.educationList);
  }

  onSubmit() {
      console.log(this.patientForm.value);
   
    let body: any =
    {
      userFullName: this.patientForm.value.userFullName,
      age: this.patientForm.value.age,
      gender: this.patientForm.value.gender,
      education: this.patientForm.value.education,
      maritalStatus: this.patientForm.value.maritalStatus,
      userPhoneNumber: this.patientForm.value.userPhoneNumber,
      job: this.patientForm.value.job,
      allergies: this.patientForm.value.allergies,
      specialPrecautions: this.patientForm.value.specialPrecautions,
      pastHistory: this.patientForm.value.pastHistory,
      familyHistory: this.patientForm.value.familyHistory,
    };
   
    this.sharedService.addUser(this.patientForm.value).subscribe(
      (data: any) => {
      this.router.navigate(['/patients']);
    },
      (err: any) => console.log(err));
      
  }

}



