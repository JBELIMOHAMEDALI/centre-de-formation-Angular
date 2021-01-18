import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpC:HttpClient) { }
  getFormation()
  {
    return this.httpC.get('http://localhost/ApiCentre/index.php/Formation/get_All_Formation');
  }
}
