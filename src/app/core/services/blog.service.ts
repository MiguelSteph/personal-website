import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";
import {BlogPreviewInfo} from "../../shared/models/blog-preview-info";
import {map} from "rxjs/operators";
import {of} from "rxjs";

const TIME_EXP: string = "_time_exp";
const TIME_INTERVAL: number = 5 * 60 * 60 * 1000;
const BLOGS_PREVIEW_INFO: string = "blogs_preview_info";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFireDatabase) { }

  fetchBlogsPreviewInfo() {
    if(localStorage.getItem(BLOGS_PREVIEW_INFO) &&
      Number(localStorage.getItem(BLOGS_PREVIEW_INFO + TIME_EXP) as string).valueOf() > new Date().getTime() ) {
      const blogsPreviewSaved: BlogPreviewInfo[] = JSON.parse(localStorage.getItem(BLOGS_PREVIEW_INFO) as string) as BlogPreviewInfo[];

      return of(blogsPreviewSaved.map(item => {
        item.publicationDate = new Date(item.publicationDate);
        return item;
      }));
    } else {
      return this.db.list(DbPath.blogsPreviewInfoPath)
        .snapshotChanges()
        .pipe(
          map(previewsList => previewsList.map(item => BlogService.convertToBlogPreviewInfo(item.key as string, item.payload.toJSON()))),
          map(blogs => {
            const sortedBlogs = blogs.sort((blog1, blog2) => blog2.publicationDate.getTime() - blog1.publicationDate.getTime());
            localStorage.setItem(BLOGS_PREVIEW_INFO, JSON.stringify(sortedBlogs));
            localStorage.setItem(BLOGS_PREVIEW_INFO + TIME_EXP, (new Date().getTime() + TIME_INTERVAL).toString());
            return sortedBlogs;
          })
        );
    }
  }

  fetchBlogInfo(key: string) {
    if(localStorage.getItem(key) &&
      Number(localStorage.getItem(key + TIME_EXP) as string).valueOf() > new Date().getTime() ) {
      return of(BlogService.convertToBlogPreviewInfo(key, JSON.parse(localStorage.getItem(key) as string)));
    } else {
      return this.db.object(DbPath.blogInfoPath + key)
        .snapshotChanges()
        .pipe(
          map(blogInfo => {
            const jsonBlogInfo = blogInfo.payload.toJSON();
            localStorage.setItem(key, JSON.stringify(jsonBlogInfo));
            localStorage.setItem(key + TIME_EXP, (new Date().getTime() + TIME_INTERVAL).toString())
            return BlogService.convertToBlogPreviewInfo(blogInfo.key as string, jsonBlogInfo);
          }),
        );
    }
  }

  private static convertToBlogPreviewInfo(blogKey: string, preview: any) : BlogPreviewInfo {
    const tab = preview.publicationDate.split('-');
    return {
      key: blogKey,
      category: preview.category,
      publicationDate: new Date(tab[0] as number, tab[1] as number, tab[2] as number),
      title: preview.title,
      previewText: preview.previewText,
      previewImg: preview.previewImg,
      keywords: preview.keywords,
      readTimeInMinutes: preview.readTimeInMinutes,
      mainImg: preview.mainImg ? preview.mainImg : "",
      content: preview.content ? preview.content : ""
    };
  }
}
