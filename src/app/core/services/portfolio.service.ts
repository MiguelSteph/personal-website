import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";
import {map} from "rxjs/operators";
import {PortfolioPreviewInfo} from "../../shared/models/portfolio-preview-info";
import {PortfolioProject} from "../../shared/models/portfolio-project";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private db: AngularFireDatabase) { }

  fetchPortfoliosPreviewInfo() {
    return this.db.list(DbPath.portfoliosPreviewInfoPath)
      .snapshotChanges()
      .pipe(
        map(previewList => previewList.map(item => item.payload.toJSON() as PortfolioPreviewInfo)),
        map(portfolios => portfolios.sort((item1, item2) => item1.order - item2.order))
      );
  }

  fetchPortfolioProject(key: string) {
    if (localStorage.getItem(key)) {
      const res =  JSON.parse(localStorage.getItem(key) as string) as PortfolioProject;
      return of(res);
    } else {
      return this.db.object(DbPath.portfolioProjectsPath + key)
        .snapshotChanges()
        .pipe(
          map(result => {
            localStorage.setItem(key, JSON.stringify(result.payload.toJSON()));
            return result.payload.toJSON() as PortfolioProject
          })
        );
    }

  }
}
