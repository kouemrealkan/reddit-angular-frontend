import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubredditModel } from './subreddit-model';
import { AuthService } from '../auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  constructor(private http: HttpClient,private authService : AuthService) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>('http://localhost:8081/api/subreddit');
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getJwtToken()}`
    }
    return this.http.post<SubredditModel>('http://localhost:8081/api/subreddit',
      subredditModel,{headers:headers});
  }
}
