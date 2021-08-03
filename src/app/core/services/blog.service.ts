import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";
import {BlogPreviewInfo} from "../../shared/models/blog-preview-info";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFireDatabase) { }

  fetchBlogsPreviewInfo() {
    return this.db.list(DbPath.blogsPreviewInfoPath)
      .snapshotChanges()
      .pipe(
        map(previewsList => previewsList.map(item => BlogService.convertToBlogPreviewInfo(item.payload.toJSON()))),
        map(blogs => blogs.sort((blog1, blog2) => blog2.publicationDate.getTime() - blog1.publicationDate.getTime()))
      );
  }

  private static convertToBlogPreviewInfo(preview: any) : BlogPreviewInfo {
    console.log(preview);
    const tab = preview.publicationDate.split('-');
    return {
      key: preview.key,
      category: preview.category,
      publicationDate: new Date(tab[0] as number, tab[1] as number, tab[2] as number),
      title: preview.title,
      previewText: preview.previewText,
      previewImg: preview.previewImg,
      keywords: preview.keywords,
      readTimeInMinutes: preview.readTimeInMinutes
    };
  }
}
