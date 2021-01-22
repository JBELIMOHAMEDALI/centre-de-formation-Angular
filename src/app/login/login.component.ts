import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Candidat } from '../model/candidat';
import { Login } from '../model/login';
import { ErourComponent } from '../page/erour/erour.component';
import { RegesterComponent } from '../page/regester/regester.component';
import { CandidatService } from '../service/candidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type:string;
  regester:boolean;
  userModal = new Login();
    constructor(private route: ActivatedRoute, private r:Router,private serv:CandidatService,private modalService: NgbModal) { 
      this.r.events.subscribe(val => {
        let id = this.route.snapshot.params.type;
      this.type=id;
     if(this.type=="c4ca4238a0b923820dcc509a6f75849b")
     {
  this.regester=false;
     }
     else if(this.type=="782b4fd5abb6c534275c49a2b7340e26")
     {
  this.regester=true;
  
     }
      });
    }
    ngOnInit(): void {
     // this.getCandidat();
  
    }
    getCandidat(pass,email)
    {
      this.serv.getLogin("candidat",email,pass).subscribe(data=>{
        let resp:any;
        resp=data;
        let e:any;
        let x:any;
        x=resp.erorer;
        e=resp.msg;
        if(x==true){
          const modalRef = this.modalService.open(ErourComponent);
          modalRef.componentInstance.name = 'Mot de Passe et/or Incorecte !!!!';
          modalRef.componentInstance.tetre = 'OPES /:';
  
        }else{
          localStorage.setItem('candidat_id',e[0].candidat_id);
          this.r.navigate(["/EspaceCandidat"]);
  
        }
      })
  
    }

    regester1()
    {
      const modalRef = this.modalService.open(RegesterComponent);
     // modalRef.componentInstance.name = 'Mot de Passe et/or Incorecte !!!!';
      modalRef.componentInstance.tetre = 'joine nous ';
      
    }
  getFourmateure(pass,email)
  {
    this.serv.getLogin("formateurs",email,pass).subscribe(data=>{
      let resp:any;
      resp=data;
      let e:any;
      let x:any;
      x=resp.erorer;
      e=resp.msg;
      if(x==true){
        const modalRef = this.modalService.open(ErourComponent);
        modalRef.componentInstance.name = 'Mot de Passe et/or Incorecte !!!!';
        modalRef.componentInstance.tetre = 'OPES /:';
  
      }else{
        localStorage.setItem('formateur_id',e[0].formateur_id);
        this.r.navigate(["/EspaceFormateur"]);

  
      }
    })
  
  
    
  }

  
}
