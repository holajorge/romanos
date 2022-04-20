import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor(private _http:HttpClient) { }
  get header(){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
   return { headers: headers };
  }

  sendCalculoResponse(data){

    return this._http.post('https://enigmatic-basin-99270.herokuapp.com/answer',data, this.header)
      .pipe(
        map( (res:any) => res),
        catchError( error => {
          return of(false)
        })
    ); 
  }


}
