import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Menus} from "./shared/classes/menus";
import {BlogsComponent} from "./features/blogs/blogs.component";
import {HomeComponent} from "./features/home/home.component";
import {PortfoliosComponent} from "./features/portfolios/portfolios.component";
import {AboutMeComponent} from "./features/about-me/about-me.component";
import {PageNotFoundComponent} from "./features/page-not-found/page-not-found.component";
import {PortfolioProjectViewComponent} from "./features/portfolios/portfolio-project-view/portfolio-project-view.component";
import {PortfolioProjectResolver} from "./core/resolvers/portfolio-project.resolver";
import {BlogComponent} from "./features/blogs/blog/blog.component";
import {BlogResolver} from "./core/resolvers/blog.resolver";

const routes: Routes = [
  {
    path: Menus.homeMenu.link.substring(1),
    component: HomeComponent
  },
  {
    path: Menus.blogMenu.link.substring(1),
    component: BlogsComponent
  },
  {
    path: Menus.blogMenu.link.substring(1) + "/:blog-name",
    component: BlogComponent,
    resolve: {
      blog: BlogResolver
    }
  },
  {
    path: Menus.portfolioMenu.link.substring(1),
    component: PortfoliosComponent
  },
  {
    path: Menus.portfolioMenu.link.substring(1) + "/:project-name",
    component: PortfolioProjectViewComponent,
    resolve: {
      project: PortfolioProjectResolver
    }
  },
  {
    path: Menus.aboutMeMenu.link.substring(1),
    component: AboutMeComponent
  },
  {
    path: '',
    redirectTo: Menus.homeMenu.link.substring(1),
    pathMatch: 'full'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
