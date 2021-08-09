import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {BlogService} from "../services/blog.service";
import {BlogPreviewInfo} from "../../shared/models/blog-preview-info";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<BlogPreviewInfo> {

  constructor(private blogService: BlogService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPreviewInfo> {
    const blogKey: string = route.paramMap.get('blog-name') as string;
    return this.blogService.fetchBlogInfo(blogKey).pipe(take(1));
  }
}
