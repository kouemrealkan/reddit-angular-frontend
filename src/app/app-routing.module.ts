import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { AuthGuard } from './auth/auth-guard';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'login',component:LoginComponent},
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-subreddit', component: CreateSubredditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
