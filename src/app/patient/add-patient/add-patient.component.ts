import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent implements OnInit {
  patientForm: FormGroup;
  educationList : any =[] ;
  patientId: any = 0;
editMode:boolean = false;

  constructor(private router: Router,private sharedService: SharedService,private activatedRoute: ActivatedRoute) { }

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
    this.activatedRoute.queryParams.subscribe(params => {
      this.patientId = params['id'];
      this.editMode = true;
  });
  if(this.editMode){
    this.sharedService.getUser(this.patientId).subscribe(
      (data: any) => {
console.log({data})   
this.patientForm.controls['userFullName'].setValue(data.userFullName);
this.patientForm.controls['age'].setValue(data.age);
this.patientForm.controls['gender'].setValue(data.gender);
this.patientForm.controls['education'].setValue(data.education);
this.patientForm.controls['maritalStatus'].setValue(data.maritalStatus);
this.patientForm.controls['userPhoneNumber'].setValue(data.userPhoneNumber);
this.patientForm.controls['job'].setValue(data.job);
this.patientForm.controls['allergies'].setValue(data.allergies);
this.patientForm.controls['specialPrecautions'].setValue(data.specialPrecautions);
this.patientForm.controls['pastHistory'].setValue(data.pastHistory);
this.patientForm.controls['familyHistory'].setValue(data.familyHistory);

},
      (err: any) => console.log(err));
    //get patient data
  }

    this.initializeUserForm();
    this.educationList = [{'value': '1', "viewValue":"xxx"}, {'value': '2', "viewValue":"yyy"}];
  }

  onSubmit() {   
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

   if(this.patientId){
    this.sharedService.editUser(this.patientId, this.patientForm.value).subscribe(
      (data: any) => {
      this.router.navigate(['/patients']);
    },
      (err: any) => console.log(err));

   }
   else{
    this.sharedService.addUser(this.patientForm.value).subscribe(
      (data: any) => {
      this.router.navigate(['/patients']);
    },
      (err: any) => console.log(err));
  }
  }

}



