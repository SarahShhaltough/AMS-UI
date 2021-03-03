import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {
  
  visitForm: FormGroup;

  constructor(private sharedService: SharedService, private titleService: Title) {
    this.titleService.setTitle("new visit");
  }

  ngOnInit(): void {
      this.setForm();
  }

  onSubmit() {
    let body: any =
    {
      userID: 3,
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
              console.log({res});
    })
  }

  setForm() {
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
  }
}
