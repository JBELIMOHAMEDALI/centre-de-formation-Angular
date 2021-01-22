import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpC:HttpClient) { }
  getAllFormation()
  {
    return this.httpC.get('http://localhost/ApiCentre/index.php/Formation/get_All_Formation');
  }
  getDetaile(id:string)
  {
    let param1= new HttpParams;
    param1=param1.set('formation_id',id.toString()) ;
    let req;
    req={
      params:param1
    }
    return this.httpC.get('http://localhost/ApiCentre/index.php/Formation/get_Detalise',req);

  }

  getOneForamtion(id:string)
  {
    let param1= new HttpParams;
    param1=param1.set('formation_id',id.toString()) ;
    let req;
    req={
      params:param1
    }
    return this.httpC.get('http://localhost/ApiCentre/index.php/Formation/get_One_Formation',req);
  }
  //    

  getsestionFormateure(id:string)
  {
    let param1= new HttpParams;
    param1=param1.set('sestion_id',id.toString()) ;
    let req;
    req={
      params:param1
    }
    return this.httpC.get('http://localhost/ApiCentre/index.php/Formation/get_formteure',req);
  }
}
