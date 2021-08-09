import {Component, Input, OnInit} from '@angular/core';
import {BlogPreviewInfo} from "../../../shared/models/blog-preview-info";
import {Menus} from "../../../shared/classes/menus";

const MONTH_SHORT_NAME = ["Jan", "Feb", "Mar",
                          "Apr", "May", "Jun",
                          "Jul", "Aug", "Sep",
                          "Oct", "Nov", "Dec"
                        ];

@Component({
  selector: 'blog-preview-component',
  templateUrl: './blog-preview-component.component.html',
  styleUrls: ['./blog-preview-component.component.css']
})
export class BlogPreviewComponentComponent implements OnInit {

  @Input("blog-post-preview") blogPreview: BlogPreviewInfo;

  constructor() { }

  ngOnInit(): void {
  }

  getFormattedDate() {
    const day = this.blogPreview.publicationDate.getDate();
    const month = MONTH_SHORT_NAME[this.blogPreview.publicationDate.getMonth()];
    const year = this.blogPreview.publicationDate.getFullYear();
    return day + " " + month + " " + year;
  }

  getBlogMenu() {
    return Menus.blogMenu.link;
  }
}
