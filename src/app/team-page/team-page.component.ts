import { Component } from "@angular/core";
import { AuthService } from "../admin/auth.service";

@Component({
  selector: "app-team-page",
  templateUrl: "./team-page.component.html",
  styleUrls: ["./team-page.component.css"],
})
export class TeamPageComponent {
  constructor(private authSvc: AuthService) {}

  navigate() {
    try {
      const url = "https://www.maazmemon.com/";
      window.open(url, "_blank");
    } catch (error) {}
  }

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
