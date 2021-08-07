import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {PortfolioProject} from "../../shared/models/portfolio-project";
import {PortfolioService} from "../services/portfolio.service";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectResolver implements Resolve<PortfolioProject> {
  constructor(private portfolioService: PortfolioService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PortfolioProject> {
    const projectName = route.paramMap.get('project-name') as string;
    return this.portfolioService.fetchPortfolioProject(projectName).pipe(take(1));
  }
}
