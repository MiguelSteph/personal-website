import { Component, OnInit } from '@angular/core';
import {Menu} from "../../shared/models/menu";
import {Menus} from "../../shared/classes/menus";
import {PersonalInfoService} from "../services/personal-info.service";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  profileInformation: any;

  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit(): void {
    this.profileInformation = this.personalInfoService.getMyInformation();
  }

  get personalProfile() {
    return this.profileInformation;
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
