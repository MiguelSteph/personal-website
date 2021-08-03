import { Component, OnInit } from '@angular/core';
import {Menus} from "../../shared/classes/menus";
import {Menu} from "../../shared/models/menu";
import {SharedEventService} from "../services/shared-event.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedEventService: SharedEventService,
              public authService: AuthService) { }

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

  get logInMenu() : Menu {
    return Menus.logInMenu;
  }

  login() {
    this.sharedEventService.onLogin.emit(true);
  }

  logout() {
    this.authService.logout();
  }

  displayName() {
    return this.authService.currentUser?.displayName ?
      this.authService.currentUser?.displayName :
      this.authService.currentUser?.email;
  }

  pictureUrl() {
    let photoLink = this.authService.currentUser?.pictureUrl
    if (!photoLink) {
      photoLink = "assets/images/default_user_image.jpeg";
    }
    return photoLink;
  }
}
