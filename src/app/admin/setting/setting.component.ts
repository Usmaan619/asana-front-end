import { Component } from "@angular/core";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.css"],
})
export class SettingComponent {
  selectedTabUser: any = false;

  constructor() {}

  onChangeTab(type: any) {
    console.log("type: ", type);

    this.selectedTabUser = !this.selectedTabUser;
    console.log("this.selectedTabUser: ", this.selectedTabUser);
  }

  navbarToggle() {
    const iconSidenav = document.getElementById("iconSidenav");
    const sidenav = document.getElementById("sidenav-main");
    let body = document.getElementsByTagName("body")[0];

    let className = "g-sidenav-pinned";

    if (body.classList.contains(className)) {
      body.classList.remove(className);
      setTimeout(() => {
        sidenav?.classList.remove("bg-white");
      }, 100);
      sidenav?.classList.remove("bg-transparent");
    } else {
      body.classList.add(className);
      sidenav?.classList.add("bg-white");
      sidenav?.classList.remove("bg-transparent");
      iconSidenav?.classList.remove("d-none");
    }
  }
}
