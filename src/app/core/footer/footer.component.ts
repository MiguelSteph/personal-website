import { Component } from '@angular/core';
import {Menu} from "../../shared/models/menu";
import {Menus} from "../../shared/classes/menus";
import {PersonalInfoService} from "../services/personal-info.service";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private personalInfoService: PersonalInfoService) { }

  get personalProfile() {
    return this.personalInfoService.profile;
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

  get contactMeMenu(): Menu {
    return Menus.contactMeMenu;
  }

  get logInMenu() : Menu {
    return Menus.logInMenu;
  }
}
