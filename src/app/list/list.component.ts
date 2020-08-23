import { ListService } from './list.service';
import { StudentModel } from './studentModel';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Array<StudentModel>;
  constructor(private service: ListService) {}

  ngOnInit(): void {
    this.service.getAllStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        throwError(error);
      }
    );
  }

}
