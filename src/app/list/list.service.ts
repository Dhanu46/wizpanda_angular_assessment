import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModel } from './studentModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  getAllStudents(): Observable<Array<StudentModel>> {
    return this.http.get<Array<StudentModel>>(
      'http://localhost:8080/college/students'
    );
  }
}
