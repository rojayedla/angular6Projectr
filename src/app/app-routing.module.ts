import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TdfFormComponent } from './TDF/tdf-form/tdf-form.component';
import { ReactiveComponent } from './reactiveForms/reactive/reactive.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { PracticeComponent } from './practice/practice.component';
import { ParentComponent } from './sharing-data/parent/parent.component';
import { UserComponent } from './routing-ex/user/user.component';
import { UserListComponent } from './routing-ex/user-list/user-list.component';
import { SiblingComponent } from './sharing-data/share-sibling/sibling/sibling.component';


const routes: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'	},
  {path: 'home', component: HomeComponent },
  {path: 'tdfForms', component: TdfFormComponent},
  {path: 'reactive', component: ReactiveComponent},
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'list', component: ListEmployeeComponent },
  // {path: 'practice', children: [
  //   {path: 'projection', component: ProjectionExComponent},
  //   {path: 'mulstrdir', component: MultiStructDirComponent}
  // ]},
  {path: 'bookpractice', children: [
 // {path: 'studentList', component: StudentListComponent}
  ]},

  { path: 'parent' , component: ParentComponent},
  {path: 'sibling', component: SiblingComponent},
  {path: 'routing', children: [
    {path: 'userlist', component: UserListComponent}
  ]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
