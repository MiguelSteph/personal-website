import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";
import {of} from "rxjs";
import {take} from "rxjs/operators";

const MIGUEL_PROFILE_KEY = "miguelProfile";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  personalProfileInfo: any;

  constructor(private db: AngularFireDatabase) { }

  getMyInformation() {
    if (!localStorage.getItem(MIGUEL_PROFILE_KEY)) {
      return new Promise((resolve) => {
        this.db.object(DbPath.myInfoPath)
          .snapshotChanges()
          .pipe(take(1))
          .subscribe(result => {
            this.personalProfileInfo = result.payload.toJSON();
            localStorage.setItem(MIGUEL_PROFILE_KEY, JSON.stringify(this.personalProfileInfo));
            resolve("");
          });
      });
    } else {
      return new Promise(resolve => {
        of(JSON.parse(localStorage.getItem(MIGUEL_PROFILE_KEY) as string))
        .subscribe(result => {
          this.personalProfileInfo = result;
          localStorage.setItem(MIGUEL_PROFILE_KEY, JSON.stringify(this.personalProfileInfo));
          resolve("");
        });
      });
    }
  }

  get profile() {
    return this.personalProfileInfo;
  }

}
