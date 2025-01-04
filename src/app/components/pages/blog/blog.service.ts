import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BLOG_CONSTANTS } from '../../../constants/blog.constants';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private formspreeUrl = BLOG_CONSTANTS.FORMSPREE_URL;

  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post(this.formspreeUrl, data);
  }
}
