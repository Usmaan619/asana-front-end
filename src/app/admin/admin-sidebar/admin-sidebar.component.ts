import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";

declare let SimpleBar: any;

@Component({
  selector: "app-admin-sidebar",
  templateUrl: "./admin-sidebar.component.html",
  styleUrls: ["./admin-sidebar.component.css"],
})
export class AdminSidebarComponent {
  constructor(
    private router: Router,
    private authSvc: AuthService,
    private toaster: ToastrService
  ) {}

  logOut() {
    this.authSvc.logOut();
    this.toaster.success("Your successfully Log-Out");
  }
  closeNav() {
    const sidenav = document.getElementById("sidenav-main");
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("g-sidenav-pinned");
    sidenav?.classList.remove("bg-white");
  }
}
