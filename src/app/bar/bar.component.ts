import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import { EspaceCandidatComponent } from '../page/espace-candidat/espace-candidat.component';
import { EspaceFormateurComponent } from '../page/espace-formateur/espace-formateur.component';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() type;
candadat:string;
formature:string;
id_canduidat:string=null;
id_formateure:string=null;
  constructor(private router:Router) { 
    this.id_canduidat=localStorage.getItem("candidat_id");
    this.id_formateure=localStorage.getItem("formateur_id");
    
  }
  path:String;
  ngOnInit(): void {
    //localStorage.clear()
console.log(this.type+"this is type");


const md5 = new Md5();
this.candadat=md5.appendStr('1').end().toString();
this.formature=md5.appendStr('2').end().toString();

  }
  logout(){localStorage.clear();}
}
