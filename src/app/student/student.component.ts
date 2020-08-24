import { StudentService } from './student.service';
import { StudentRequestPayload } from './StudentRequestPayload';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentRequestPayload : StudentRequestPayload
  signupForm: FormGroup;
  constructor(private studentService:StudentService,
    private router:Router) {
      this.studentRequestPayload = {
        firstName: '',
        lastName : '',
        email: '',
        age : 0,
        city :'',     
      };
     }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age : new FormControl(0,Validators.required),
      city : new FormControl(null)
    })
  }

  create() {
    this.studentRequestPayload.email = this.signupForm.get('email').value;
    this.studentRequestPayload.firstName = this.signupForm.get('firstName').value;
    this.studentRequestPayload.lastName = this.signupForm.get(
      'lastName'
    ).value;
    this.studentRequestPayload.age = this.signupForm.get('age').value;

    this.studentService.create(this.studentRequestPayload).subscribe(
      (data) => {
        
        this.router.navigate(['/students']);
      },
      (error) => {
        this.router.navigate(['/student/create'])
        console.log(error);
        
      }
    );
}
}
