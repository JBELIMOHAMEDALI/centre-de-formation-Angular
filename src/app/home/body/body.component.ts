import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  tabformationTab:Formation[]=[];
  constructor(private serv:FormationService) { }

  ngOnInit(): void {
    this.serv.getFormation().subscribe(data=>{
      let resp: any;
      resp=data;
      let tab:Formation[]=[];
      let e =resp.msg;
     console.log(resp.msg)
     e.forEach(function(value) {
      let formation:Formation;
       formation = new Formation(value.formation_id,value.titre,value.description,value.ch_horaire,value.difficulte,value.program);
       tab.push(formation);

     })
     this.tabformationTab=tab;
    })
  }



  
}
