import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/shared/auth.service';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,private authService:AuthService) {
    
      
   }

   getAllPosts():Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8081/api/posts/');
   }

   createPost(postPayload: CreatePostPayload): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getJwtToken()}`
    }
    return this.http.post('http://localhost:8081/api/posts/',postPayload,{headers:headers});
  }
}
