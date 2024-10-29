import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measure, Task } from '../Task';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MeasureService {
  private apiUrl = 'http://localhost:5000/measures'

  constructor(private http:HttpClient) { }
  getMeasure(): Observable<Measure[]> {
  return this.http.get<Measure[]>(this.apiUrl);
  }

  deleteMeasure(measure: Measure): Observable<Measure> {
    const url = `${this.apiUrl}/${measure.id}`;
    return this.http.delete<Measure>(url);
  }
  addMeasure(measure:Measure):Observable<Measure> {
    return this.http.post<Measure>(this.apiUrl, measure, httpOptions);
  }
  updateMeasure(measure:Measure):Observable<Measure> {
    const url = `${this.apiUrl}/${measure.id}`;
    return this.http.put<Measure>(url, measure, httpOptions);
  }
}
