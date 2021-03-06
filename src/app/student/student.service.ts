import { StudentRequestPayload } from './StudentRequestPayload';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private http:HttpClient) { 

  }
  create(studentRequestPayload :
    StudentRequestPayload):Observable<any> {
      return this.http.post(
        'http://localhost:8080/college/student',
        studentRequestPayload,
        {
          responseType:'json'
        }
      )
  }

  
}
