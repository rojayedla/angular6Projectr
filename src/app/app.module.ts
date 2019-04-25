import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfFormComponent } from './TDF/tdf-form/tdf-form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactiveForms/reactive/reactive.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { PracticeComponent } from './practice/practice.component';
import { ChildComponent } from './sharing-data/child/child.component';
import { ParentComponent } from './sharing-data/parent/parent.component';
import { UserComponent } from './routing-ex/user/user.component';
import { UserListComponent } from './routing-ex/user-list/user-list.component';
import { TabComponent } from './multiple-structural-directives/tab/tab.component';
import { TabContentComponent } from './multiple-structural-directives/tab-content/tab-content.component';
import { MultiStructDirComponent } from './multiple-structural-directives/multi-struct-dir/multi-struct-dir.component';
import { TeacherComponent } from './sharing-data/teacher/teacher.component';
import { StudentComponent } from './sharing-data/student/student.component';
import { SiblingComponent } from './sharing-data/share-sibling/sibling/sibling.component';
import { TodoComponent } from './sharing-data/share-sibling/todo/todo.component';
import { DashboardComponent } from './sharing-data/share-sibling/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfFormComponent,
    HomeComponent,
    ReactiveComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    PracticeComponent,
    ChildComponent,
    ParentComponent,
    UserListComponent,
    SiblingComponent,
    TodoComponent,
    DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
