import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";
import {BlogPreviewInfo} from "../../shared/models/blog-preview-info";
import {map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFireDatabase) { }

  fetchBlogsPreviewInfo() {
    return this.db.list(DbPath.blogsPreviewInfoPath)
      .snapshotChanges()
      .pipe(
        map(previewsList => previewsList.map(item => BlogService.convertToBlogPreviewInfo(item.key as string, item.payload.toJSON()))),
        map(blogs => blogs.sort((blog1, blog2) => blog2.publicationDate.getTime() - blog1.publicationDate.getTime()))
      );
  }

  fetchBlogInfo(key: string) {
    if(localStorage.getItem(key)) {
      return of(BlogService.convertToBlogPreviewInfo(key, JSON.parse(localStorage.getItem(key) as string)));
    } else {
      return this.db.object(DbPath.blogInfoPath + key)
        .snapshotChanges()
        .pipe(
          map(blogInfo => {
            const jsonBlogInfo = blogInfo.payload.toJSON();
            localStorage.setItem(key, JSON.stringify(jsonBlogInfo));
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
