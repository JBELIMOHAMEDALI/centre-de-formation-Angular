import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Candidat } from 'src/app/model/candidat';
import { CandidatService } from 'src/app/service/candidat.service';
@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent implements OnInit {
  model: any = {};
  alert:boolean=false;
  alertdanger:boolean=false;
  message:string="";
  @Input() name;
  @Input() tetre;
  constructor(public activeModal: NgbActiveModal,private serv:CandidatService) { }

  ngOnInit(): void {
   
  }


  onSubmit() {
    // console.log(this.model)
    // lastName/email/cin/photo/cv/password
    //
    //let x=this.model.firstName;
   // console.log("this is x "+x);
     let user=new Candidat(null,this.model.firstName,this.model.lastName,this.model.email,this.model.cin,
      this.model.photo,this.model.cv,this.model.password);
      //new Candidat(null,"dali","jb","gggg@gmail.com","12345678","pppppp","ggg",'ffffff')
      console.log("this is new user  "+user);
      this.serv.adduser(user).subscribe(data=>{
        let resp:any;
        resp=data;
      if(resp.erorer==false){this.alert=true;this.alertdanger=false;this.message=resp.msg}
        else if(resp.erorer==true){this.alert=false;this.alertdanger=true;this.message="Erreur lors de l'insertion dans la base de donnée";}
       
      })

  }

}
