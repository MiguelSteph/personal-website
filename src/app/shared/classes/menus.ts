import {Menu} from "../models/menu";

export class Menus {

  public static homeMenu: Menu = {
    name: "Home",
    link: "/home"
  };

  public static blogMenu: Menu = {
    name: "Blog",
    link: "/blog"
  };

  public static portfolioMenu: Menu = {
    name: "Portfolio",
    link: "/portfolio"
  };

  // public static aboutMeMenu: Menu = {
  //   name: "About Miguel",
  //   link: "/about-me"
  // };

  public static contactMeMenu: Menu = {
    name: "Contact Me",
    link: "/contact"
  };

  public static logInMenu: Menu = {
    name: "Log In",
    link: "/login"
  }
}
