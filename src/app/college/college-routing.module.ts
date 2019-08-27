import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule { }
