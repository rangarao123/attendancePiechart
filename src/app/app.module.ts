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

import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherregComponent } from './teacherreg/teacherreg.component';

import { EditComponent } from './edit/edit.component';
import { TcComponent } from './tc/tc.component';
import { AssignclasstostudentComponent } from './assignclasstostudent/assignclasstostudent.component';
import { AssignlistComponent } from './assignlist/assignlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewStudentListComponent,
    AdminDashboardComponent,
    TeacherComponent,
    AssignTeacherToClassComponent,
    TeacherDashboardComponent,
    TeacherregComponent,

    EditComponent,
    TcComponent,
    AssignclasstostudentComponent,
    AssignlistComponent
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
           path: 'teacherdashboard',component: TeacherDashboardComponent
        },

        {
           path: 'getsection',component:  AssignclasstostudentComponent

                 },
       {
           path: 'getclass/:class/:section',component:  AssignlistComponent

                   },

        {
          path:'sudheer',component:TcComponent
        },
        {path:"addteacher",component:TeacherregComponent},
        {path:"edit",component:EditComponent}


      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
