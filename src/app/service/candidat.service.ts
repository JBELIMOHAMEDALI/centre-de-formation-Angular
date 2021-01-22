import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Candidat } from '../model/candidat';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private httpC:HttpClient) { }
  getLogin(tab:string,email:string,passwored:string)
  {
    let param1= new HttpParams;
    param1=param1.set('tab',tab.toString()) ;
    param1=param1.set('email',email.toString()) ;
    param1=param1.set('passwored',passwored.toString()) ;
    let req;
    req={
      params:param1
    }
    return this.httpC.get('http://localhost/ApiCentre/index.php/Login/get_user',req);

  }
  adduser(user:Candidat){
    let param1= new HttpParams;
    param1=param1.set('cin',user.cin.toString()) ;
    param1=param1.set('cv',user.cv.toString()) ;
    param1=param1.set('email',user.email.toString()) ;
    param1=param1.set('mot_pass',user.mot_pass.toString()) ;
    param1=param1.set('nom',user.nom.toString()) ;
    param1=param1.set('photo',user.photo.toString()) ;
    param1=param1.set('prenom',user.prenom.toString()) ;

    return this.httpC.post('http://localhost/ApiCentre/index.php/Candidat/Add_Candidat',param1)
  }
  getListSestion(id:string)
  {
    let param1= new HttpParams;
    param1=param1.set('candidat_id',id.toString()) ;
    let req;
    req={
      params:param1
    }
    return this.httpC.get('http://localhost/ApiCentre/index.php/Candidat/get_sestion',req);

  }
}
