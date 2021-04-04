import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostInterface } from '../models/post.interface';

@Injectable()
export class PostService {
  API_URL = '/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${environment.BASE_URL}/posts`);
  }
}
