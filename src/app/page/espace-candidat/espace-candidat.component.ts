import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sestion } from 'src/app/model/sestion';
import { CandidatService } from 'src/app/service/candidat.service';

@Component({
  selector: 'app-espace-candidat',
  templateUrl: './espace-candidat.component.html',
  styleUrls: ['./espace-candidat.component.scss']
})
export class EspaceCandidatComponent implements OnInit {
id_canduidat:string;
listSestion:Sestion[]=[];
p:number;
  constructor(private serv:CandidatService,private router:Router) {
    this.id_canduidat=localStorage.getItem("candidat_id");
   }

  ngOnInit(): void {
    if(this.id_canduidat==null){
      this.router.navigate(['/home']);
      }else{
      this.getListSestion(); 
      console.log(this.listSestion)
      }
      
  }

  getListSestion()
  {
    this.serv.getListSestion(this.id_canduidat).subscribe(data=>{
      let resp:any;
      resp=data;
      let donne:any;
      let tab:Sestion[]=[];
      donne=resp.msg;
      // console.log(donne+"this is data ")
      donne.forEach(function(value) {
       let sestion=new Sestion(value.sessions_id,value.date_debut,value.date_fin,value.id_formation,value.plang,value.nbre_partsiponte)
        tab.push(sestion);
      });
      this.listSestion=tab;
    })
  }
  
  opendetaile(id_form)
  {

  }
}
