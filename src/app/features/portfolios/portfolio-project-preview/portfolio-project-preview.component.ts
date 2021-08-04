import {Component, Input, OnInit} from '@angular/core';
import {PortfolioPreviewInfo} from "../../../shared/models/portfolio-preview-info";

@Component({
  selector: 'portfolio-project-preview',
  templateUrl: './portfolio-project-preview.component.html',
  styleUrls: ['./portfolio-project-preview.component.css']
})
export class PortfolioProjectPreviewComponent {

  @Input("portfolio-preview-info") portfolioPreviewInfo: PortfolioPreviewInfo;
  @Input("is-first") isFirst: boolean;

  constructor() { }

}
