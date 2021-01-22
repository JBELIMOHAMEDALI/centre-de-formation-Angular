import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation';
import { Sestion } from 'src/app/model/sestion';

@Component({
  selector: 'app-rechercher-formation',
  templateUrl: './rechercher-formation.component.html',
  styleUrls: ['./rechercher-formation.component.scss']
})
export class RechercherFormationComponent implements OnInit {
  noData;
  p;
  formationsList:Sestion[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  convertToArray(ch)
{}}
