import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  constructor(private sharedService: SharedService,private activatedRoute: ActivatedRoute, private router: Router) { }
  id:any;
  visits: any[];
  cols: any[];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    });

    this.sharedService.getVisits(this.id).subscribe((res: any) => {
      Object.keys(res).map(r => {
        this.visits = res;
      });
    },
      error => {
        console.log("error ",error);
      });

      this.cols = [
        { field: 'co', header: 'CO' },
        { field: 'examination', header: 'Examination' },
        { field: 'ge', header: 'GE' },
        { field: 'investigations', header: 'Investigations' },
        { field: 'notes', header: 'Notes' },
        { field: 'plan', header: 'Plan' },
        { field: 'treatment', header: 'Treatment' }, // data should be added!!
      ];
  }

  addVisit(){
    this.router.navigateByUrl('/new-visit/'+this.id);
  }

}