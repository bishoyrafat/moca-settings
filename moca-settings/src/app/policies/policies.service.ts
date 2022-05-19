import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PoliciesService {
  url = environment.baseURL + `v${environment.version}/`;
  constructor(private http: HttpClient) {}

  getPoliciesTypes() {
    return this.http.get(this.url + 'PolicyTypes?LobSpaceTypeId=1&WithRelatedDescription=false');
  }

  getPoliciesById(policyTypeId:number,id: number) {
    return this.http.get(
      this.url + `Policies/PolicyType/${policyTypeId}?LobSpaceTypeId=${id}`
    );
  }

  postPoliciesById(id: number, body: any) {
    return this.http.post(this.url + 'Policies/PolicyType/' + id, body);
  }
}
