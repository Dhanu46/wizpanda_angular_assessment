import { UpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [ { path: '', component: ListComponent },
{
  path: 'students',
  component: ListComponent,
},
{ path: 'student/create', component: StudentComponent },

{ path: 'student/edit/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
