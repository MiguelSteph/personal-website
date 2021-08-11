import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DbPath} from "../../shared/classes/db-path";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendEmail(data: FormData) {
    return this.http.post(DbPath.staticMailWebAppURL, data)
      .pipe(
        map((response: any) => {
          return response.result === "success";
        }),
        catchError((err, caught) => {
          console.error(err);
          return of(false);
        })
      );
  }
}
