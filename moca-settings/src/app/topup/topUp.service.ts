import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopUpService {

  url = environment.baseURL + `v${environment.version}/`;
  constructor(private http: HttpClient) {}

  getTopUpById(topUpType:number,id:number){
  return  this.http.get(this.url + `TopUps/${topUpType}?LobSpaceTypeId=${id}`)
  }

  postTopUpById(topUpType:number,id:number,body:any){
    return  this.http.post(this.url + `TopUps/${topUpType}?LobSpaceTypeId=${id}`,body)
  }


  updateTopUpById(topUpType:number,body:any){
    return  this.http.put(this.url + `TopUps?topUpTypeId=${topUpType}`,body)

  }
  getAllTopUpTypes(){
    return  this.http.get(this.url + 'TopUpTypes')

  }

}
