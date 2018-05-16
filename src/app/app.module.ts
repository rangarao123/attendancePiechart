import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NewStudentListComponent } from './new-student-list/new-student-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AssignTeacherToClassComponent } from './assign-teacher-to-class/assign-teacher-to-class.component';
import { AssignStudentToClassComponent } from './assign-student-to-class/assign-student-to-class.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewStudentListComponent,
    AdminDashboardComponent,
    TeacherComponent,
    AssignTeacherToClassComponent,
    AssignStudentToClassComponent,
    TeacherDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        {
           path: 'login',component: LoginComponent
        },
        {
           path: 'admindashboard',component: AdminDashboardComponent
        },
        {
           path: 'newstudentlist',component: NewStudentListComponent
        },
        {
           path: 'teacher',component: TeacherComponent
        },
        {
           path: 'teachertoclass',component: AssignTeacherToClassComponent
        },
        {
           path: 'studenttoclass',component: AssignStudentToClassComponent
        },
        {
           path: 'teacherdashboard',component: TeacherDashboardComponent
        },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
