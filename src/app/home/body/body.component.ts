import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation';
import { FormationService } from 'src/app/service/formation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  tabformationTab:Formation[]=[];
  constructor(private serv:FormationService,private router: Router) { }

  ngOnInit(): void {
    this.serv.getAllFormation().subscribe(data=>{
      let resp: any;
      resp=data;
      let tab:Formation[]=[];
      let e =resp.msg;
   //  console.log(resp.msg)
     e.forEach(function(value) {
      let formation:Formation;
       formation = new Formation(value.formation_id,value.titre,value.description,value.ch_horaire,value.difficulte,value.program);
       tab.push(formation);

     })
     this.tabformationTab=tab;
    // console.log("000000000000000")
     console.log(this.tabformationTab)
    })
  }
  opendetaile(id){
console.log(id);
this.router.navigate(['detail',id]);
  }


  
}
