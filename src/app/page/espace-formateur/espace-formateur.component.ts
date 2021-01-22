import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-formateur',
  templateUrl: './espace-formateur.component.html',
  styleUrls: ['./espace-formateur.component.scss']
})
export class EspaceFormateurComponent implements OnInit {
  id_formateure:string;
  constructor() { 
    this.id_formateure=localStorage.getItem("formateur_id");
  }

  ngOnInit(): void {
  }

}
