import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {DbPath} from "../../shared/classes/db-path";

const MIGUEL_PROFILE_KEY = "miguelProfile";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private db: AngularFireDatabase) { }

  getMyInformation() {
    if (!localStorage.getItem(MIGUEL_PROFILE_KEY)) {
      this.db.object(DbPath.myInfoPath)
        .snapshotChanges()
        .subscribe(result => {
          const profileInfo = result.payload.toJSON();
          localStorage.setItem(MIGUEL_PROFILE_KEY, JSON.stringify(profileInfo));
          return profileInfo;
        });
    } else {
      return JSON.parse(localStorage.getItem(MIGUEL_PROFILE_KEY) as string);
    }
  }
}
