import { Component, OnInit } from '@angular/core';
import {BlogPreviewInfo} from "../../shared/models/blog-preview-info";
import {BlogService} from "../../core/services/blog.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogPreviewList: BlogPreviewInfo[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.fetchBlogsPreviewInfo()
      .subscribe(blogsPreview => this.blogPreviewList = blogsPreview);
  }

}
