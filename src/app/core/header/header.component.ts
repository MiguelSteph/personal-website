import { Component, OnInit } from '@angular/core';
import {Menus} from "../../shared/classes/menus";
import {Menu} from "../../shared/models/menu";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get homeMenu() : Menu {
    return Menus.homeMenu;
  }

  get blogMenu() : Menu {
    return Menus.blogMenu;
  }

  get portfolioMenu() : Menu {
    return Menus.portfolioMenu;
  }

  get aboutMeMenu() : Menu {
    return Menus.aboutMeMenu;
  }

  get contactMenu() : Menu {
    return Menus.contactMenu;
  }

  get logInMenu() : Menu {
    return Menus.logInMenu;
  }
}
