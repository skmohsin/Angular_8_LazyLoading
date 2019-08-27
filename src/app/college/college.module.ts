import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [StudentComponent, TeacherComponent, AdminComponent],
  imports: [
    CommonModule,
    CollegeRoutingModule
  ]
})
export class CollegeModule { }
