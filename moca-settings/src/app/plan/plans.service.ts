import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  planTypes: Subject<any> = new Subject();
  url = environment.baseURL + `v${environment.version}/`;
  constructor(private http: HttpClient) {}

  setPlanTypes(types: any) {
    this.planTypes.next(types);
  }

  getPlansById(planType: number, id: number) {
    return this.http.get(this.url + `Plans/${planType}?LobSpaceTypeId=${id}`);
  }

  postPlansById(planType: number, body: any) {
    return this.http.put(this.url + `Plans?planTypeId=${planType}`, body);
  }

  getAllPlanTypes() {
    return this.http.get(this.url + `PlanTypes`);
  }
}
