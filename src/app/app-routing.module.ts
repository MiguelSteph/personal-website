import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Menus} from "./shared/classes/menus";
import {BlogsComponent} from "./features/blogs/blogs.component";
import {HomeComponent} from "./features/home/home.component";
import {PortfoliosComponent} from "./features/portfolios/portfolios.component";
import {AboutMeComponent} from "./features/about-me/about-me.component";
import {PageNotFoundComponent} from "./features/page-not-found/page-not-found.component";

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
    path: Menus.portfolioMenu.link.substring(1),
    component: PortfoliosComponent
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
