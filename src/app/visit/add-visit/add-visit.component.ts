import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {
  
  visitForm: FormGroup;
  historyForm: FormGroup;
  id:number;
  res: any; 
  visitId:any;

  constructor(private sharedService: SharedService, private titleService: Title,private router: Router,private activatedRoute: ActivatedRoute) {
    this.titleService.setTitle("new visit");
  }

  ngOnInit(): void {
      this.setForms();
      this.activatedRoute.params.subscribe(params => {
        console.log({params})
        this.id = Number(params["id"]);
        this.visitId = params["visitId"]; 
      });
      //get user data from allg. and last visit
      this.sharedService.getLastVisitData(this.id).subscribe((res: any) => {
        console.log("res", res);
        this.res = res;
        this.historyForm.controls['notes'].setValue(res.notes);
      })
  }

  onSubmit() {
    let body: any =
    {
      userID: this.id,
      branchID: 1,
      cO: this.visitForm.value.complains,
      examination: this.visitForm.value.examination,
      ge: this.visitForm.value.general,
      systems: this.visitForm.value.systems,
      investigations: this.visitForm.value.investigations,
      plan: this.visitForm.value.plan,
      treatment: this.visitForm.value.treatment,
      notes: this.visitForm.value.notes

    }

    this.sharedService.addVisit(body).subscribe((res: any) => {
      this.router.navigate(['/patients']);

    })
  }

  setForms() {
    this.visitForm = new FormGroup({
      complains: new FormControl(null, [Validators.required, Validators.maxLength(4000)]),
      examination: new FormControl(null, [Validators.required, Validators.maxLength(4000)]),
      general: new FormControl(null, [Validators.required, Validators.maxLength(4000)]),
      systems: new FormControl(null, [Validators.required, Validators.maxLength(4000)]),
      investigations: new FormControl(null, [Validators.required, Validators.maxLength(4000)]),
      plan: new FormControl(null, [Validators.required, Validators.maxLength(4000)]),
      treatment: new FormControl(null, [Validators.required, Validators.maxLength(4000)]),
      notes: new FormControl(null, [Validators.maxLength(4000)]),
    });
  

  this.historyForm = new FormGroup({
    notes: new FormControl(null, [Validators.maxLength(4000)]),
  });
  }
}
