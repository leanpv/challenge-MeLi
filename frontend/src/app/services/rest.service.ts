import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  private httpOptionsGeneral = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  constructor(private http: HttpClient) { }

  getMeli(item) {
    return this.http.get(`http://localhost:3000/search/${ item }`)
      .pipe(map(this.extractData));
  }

  getDetail(id) {
    return this.http.get(`http://localhost:3000/item/${ id }`)
      .pipe(map(this.extractData));
  }

  getDescription(id) {
    return this.http.get(`http://localhost:3000/item/${ id }/description`)
      .pipe(map(this.extractData));
  }

}
