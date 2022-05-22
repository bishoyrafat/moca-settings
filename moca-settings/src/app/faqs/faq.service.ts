import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  url = environment.baseURL + `v${environment.version}/`;
  constructor(private http: HttpClient) {}

  getAllFaqs() {
    return this.http.get(
      this.url + 'Categories?WithFaqs=true&WithNonCategorizedFaqs=true'
    );
  }

  postCategory(body: any) {
    return this.http.post(this.url + 'Categories', body);
  }

  postCategoryById(id: number, body: any) {
    return this.http.post(this.url + `Faqs/Category/${id}`, body);
  }

  deleteCategoryById(id: number) {
    return this.http.delete(
      this.url + `Categories/${id}?DeleteRelatedFaqs=true`
    );
  }

  updateCategoryById(id: number, body: any) {
    return this.http.put(this.url + `Categories/${id}`, body);
  }

  deleteQuestionById(id: Number) {
    return this.http.delete(this.url + `Faqs/${id}`);
  }

  updateQuestionById(id: number, body: any) {
    return this.http.put(this.url + `Faqs/${id}`, body);
  }

  updateFaqsOrder(body:any){
    return this.http.put(this.url + `Faqs`, body);
  }


  updateCategoryOrder(id:number ,body:any){
    return this.http.put(this.url + `Categories/LobSpaceType/${id}`, body);
  }



}
