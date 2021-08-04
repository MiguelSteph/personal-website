import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";
import {map} from "rxjs/operators";
import {PortfolioPreviewInfo} from "../../shared/models/portfolio-preview-info";

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
}
