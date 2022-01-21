import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {UserComponent} from './user/user.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: ':userId',
    component: UserComponent
  }]
}];

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})


export class UsersModule { }
