import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { //to apply route guard in collection of routes
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'members', component: MemberListComponent, },
      { path: 'members/:username', component: MemberDetailsComponent },
      { path: 'lists', component: MemberListComponent },
      { path: 'messages', component: MessagesComponent },
    ]
  },
  // {path: 'members', component: MemberListComponent, canActivate:[authGuard]},
  { path : 'not-found', component:NotFoundComponent},
  { path : 'server-error', component:ServerErrorComponent},
  { path : 'testerror', component:TestErrorComponent},
  { path: '**', component: HomeComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
