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

    this.getVisits(this.id);

      this.cols = [
        { field: 'co', header: 'CO' },
        { field: 'examination', header: 'Examination' },
        { field: 'ge', header: 'GE' },
        { field: 'investigations', header: 'Investigations' },
        { field: 'notes', header: 'Notes' },
        { field: 'plan', header: 'Plan' },
        { field: 'treatment', header: 'Treatment' }, 
        { field: 'visitDate', header: 'visitDate' } 
      ];
  }

  getVisits(id:any){
    this.sharedService.getVisits(id).subscribe((res: any) => {
      Object.keys(res).map(r => {
        this.visits = res;
      });
    },
      error => {
        console.log("error ",error);
      });
  }

  addVisit(){
    this.router.navigateByUrl('/new-visit/'+this.id);
  }

  editVisit(visitId:any){
    this.router.navigateByUrl('/new-visit/'+this.id+'/'+visitId);
  }

  deleteVisit(id:any){
  this.sharedService.deleteVisit(id).subscribe((res: any) => {
    this.getVisits(this.id);
  },
    error => {
      console.log("error ",error);
    });
  }

  view(id:any){}

}