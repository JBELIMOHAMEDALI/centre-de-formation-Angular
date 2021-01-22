import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/model/formation';
import { Formature } from 'src/app/model/formature';
import { Minifourmateure } from 'src/app/model/minifourmateure';
import { Sestion } from 'src/app/model/sestion';
import {FormationService} from '../../service/formation.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
id:string;
id_setion:string="12";
listdetaile:Sestion[]=[];
tabformationTab:Formation[]=[];
listId:string[]=[];
listFourmateure:Minifourmateure[]=[];
  constructor(private route: ActivatedRoute,private serv:FormationService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.id=id;

/*this.getFormation();
this.getSestion();
this.getlistFourmateure();*/
console.log(this.listId)
this.getSestion();




    // console.log("this is list+++++"+this.listdetaile)
    // this.listdetaile.forEach(function(value) {
    //   console.log("oook")
    //   console.log(value.sestion_id);
    //   })
  }
  getSestion()
{
  this.serv.getDetaile(this.id).subscribe(data=>{
    let resp: any;
    resp=data;
    let tab:Sestion[]=[];
    let tabs:string[]=[];
    let e =resp.msg;
 //  console.log(resp.msg)
   e.forEach(function(value) {
    let sestion:Sestion;
    let id:string;
    id=value.sessions_id;
    //this.get_fourmat(value.sessions_id);

     sestion=new Sestion(value.sessions_id,value.date_debut,value.date_fin,value.id_formation,value.plang,value.nbre_partsiponte)
     tab.push(sestion);
     tabs.push(id);
     

   })
   this.listdetaile=tab;
   this.listId=tabs;
   console.log("list detaile")
   console.log(this.listdetaile)
   console.log("list id")
   console.log(this.listId)
  })

}
getFormation(){
  
  this.serv.getOneForamtion(this.id).subscribe(data=>{
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
   console.log("tabformationTab")
   console.log(this.tabformationTab)
  })
}

get_fourmat(id_sers:string)
{

  this.serv.getsestionFormateure(id_sers).subscribe(data=>{
    let resp: any;
    resp=data;
    let tab:Minifourmateure[]=[];
    let e =resp.msg;
 //  console.log(resp.msg)
   e.forEach(function(value) {
    let formature:Minifourmateure;
    formature = new Minifourmateure(value.nom,value.prenom,value.sestion_id)
     tab.push(formature);

   })
   console.log("tab");
   console.log(tab);
   console.log("tab");

   this.listFourmateure=this.listFourmateure.concat(tab);
   console.log("listFourmateure");
   console.log(this.listFourmateure);




  })
}


}






