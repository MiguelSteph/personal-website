import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  FeaturesForUsertype,
  PortfolioProject,
} from "../../../shared/models/portfolio-project";

@Component({
  selector: 'portfolio-project-view',
  templateUrl: './portfolio-project-view.component.html',
  styleUrls: ['./portfolio-project-view.component.css']
})
export class PortfolioProjectViewComponent implements OnInit {

  portfolioProject: PortfolioProject;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(data => this.portfolioProject = data.project);
  }

  getProjectMedia(key: string) {
    return this.portfolioProject.projectMedia[key];
  }

  getProjectStacks() {
    return Object.values(this.portfolioProject.stack)
      .sort((item1, item2) => item1.order - item2.order);
  }

  getStackItems(stackNameList: string): string[] {
    return stackNameList.split("|").map(item => item.trim());
  }

  getUserTypeAndFeatures() {
    if (this.portfolioProject.usersAndFeatures) {
      return Object.values(this.portfolioProject.usersAndFeatures.featuresAndUsers)
        .sort((item1, item2) => item1.order - item2.order);
    }
    return [] as FeaturesForUsertype[];
  }

  getStaticPreviewsImg() {
    return (this.portfolioProject.projectMedia.staticPreviewsImg as string)
      .split("|").map(item => item.trim());
  }
}
