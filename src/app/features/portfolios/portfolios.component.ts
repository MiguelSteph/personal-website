import { Component, OnInit } from '@angular/core';
import {PortfolioPreviewInfo} from "../../shared/models/portfolio-preview-info";
import {PortfolioService} from "../../core/services/portfolio.service";

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  portfoliosPreviewList: PortfolioPreviewInfo[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.fetchPortfoliosPreviewInfo()
      .subscribe(previews => this.portfoliosPreviewList = previews);
  }

}
