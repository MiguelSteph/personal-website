import { Component, OnInit } from '@angular/core';
import {BlogPreviewInfo} from "../../../shared/models/blog-preview-info";
import {ActivatedRoute} from "@angular/router";

const MONTH_SHORT_NAME = ["Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec"
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogInfo: BlogPreviewInfo;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(data => this.blogInfo = data.blog);
  }

  getFormattedDate() {
    const day = this.blogInfo.publicationDate.getDate();
    const month = MONTH_SHORT_NAME[this.blogInfo.publicationDate.getMonth()];
    const year = this.blogInfo.publicationDate.getFullYear();
    return day + " " + month + " " + year;
  }

  getKeywords() {
    return this.blogInfo.keywords.split("|").map(item => item.trim());
  }

}
