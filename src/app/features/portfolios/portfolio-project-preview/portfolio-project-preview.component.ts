import {Component, Input, OnInit} from '@angular/core';
import {PortfolioPreviewInfo} from "../../../shared/models/portfolio-preview-info";
import {Menus} from "../../../shared/classes/menus";
import {Router} from "@angular/router";

@Component({
  selector: 'portfolio-project-preview',
  templateUrl: './portfolio-project-preview.component.html',
  styleUrls: ['./portfolio-project-preview.component.css']
})
export class PortfolioProjectPreviewComponent {

  @Input("portfolio-preview-info") portfolioPreviewInfo: PortfolioPreviewInfo;
  @Input("is-first") isFirst: boolean;

  constructor(private router: Router) { }

  getPortfolioMenuLink(): string {
    return Menus.portfolioMenu.link;
  }

  viewPortfolioProjectDetails() {
    this.router.navigate([this.getPortfolioMenuLink(), this.portfolioPreviewInfo.projectKey]);
  }

  viewPortfolioProjectLiveDemo() {
    this.router.navigate([this.getPortfolioMenuLink(), this.portfolioPreviewInfo.projectKey], {fragment: 'projectDemo'});
  }
}
