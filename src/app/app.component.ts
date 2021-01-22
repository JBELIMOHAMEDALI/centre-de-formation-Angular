import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges {
  id_canduidat:string=null;
  id_formateure:string=null;
  type:number=0;
  constructor(){
   // localStorage.clear();
    this.id_canduidat=localStorage.getItem("candidat_id");
    this.id_formateure=localStorage.getItem("formateur_id");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.id_canduidat!=null){this.type=1;
    }
    else if(this.id_formateure!=null){this.type=2}
  console.log("this is type"+this.type)
  }
  ngDoCheck(): void {

  }
  title = 'centr-from';
}
