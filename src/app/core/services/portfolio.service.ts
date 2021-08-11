import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";
import {map} from "rxjs/operators";
import {PortfolioPreviewInfo} from "../../shared/models/portfolio-preview-info";
import {PortfolioProject} from "../../shared/models/portfolio-project";
import {of} from "rxjs";

const TIME_EXP: string = "_time_exp";
const TIME_INTERVAL: number = 5 * 60 * 60 * 1000;
const PORTFOLIOS_PREVIEW_INFO = "portfolio_preview_info";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private db: AngularFireDatabase) { }

  fetchPortfoliosPreviewInfo() {
    if(localStorage.getItem(PORTFOLIOS_PREVIEW_INFO) &&
      Number(localStorage.getItem(PORTFOLIOS_PREVIEW_INFO + TIME_EXP) as string).valueOf() > new Date().getTime() ) {
      const portfoliosPreviewSaved: PortfolioPreviewInfo[] = JSON.parse(
          localStorage.getItem(PORTFOLIOS_PREVIEW_INFO) as string
        ) as PortfolioPreviewInfo[];
      return of(portfoliosPreviewSaved);
    } else {
      return this.db.list(DbPath.portfoliosPreviewInfoPath)
        .snapshotChanges()
        .pipe(
          map(previewList => previewList.map(item => item.payload.toJSON() as PortfolioPreviewInfo)),
          map(portfolios => {
            const sortedPortfolios = portfolios.sort((item1, item2) => item1.order - item2.order)
            localStorage.setItem(PORTFOLIOS_PREVIEW_INFO, JSON.stringify(sortedPortfolios));
            localStorage.setItem(PORTFOLIOS_PREVIEW_INFO + TIME_EXP, (new Date().getTime() + TIME_INTERVAL).toString());
            return sortedPortfolios;
          })
        );
    }
  }

  fetchPortfolioProject(key: string) {
    if (localStorage.getItem(key) &&
      Number(localStorage.getItem(key + TIME_EXP) as string).valueOf() > new Date().getTime()) {
      const res =  JSON.parse(localStorage.getItem(key) as string) as PortfolioProject;
      return of(res);
    } else {
      return this.db.object(DbPath.portfolioProjectsPath + key)
        .snapshotChanges()
        .pipe(
          map(result => {
            localStorage.setItem(key, JSON.stringify(result.payload.toJSON()));
            localStorage.setItem(key + TIME_EXP, (new Date().getTime() + TIME_INTERVAL).toString())
            return result.payload.toJSON() as PortfolioProject
          })
        );
    }

  }
}
