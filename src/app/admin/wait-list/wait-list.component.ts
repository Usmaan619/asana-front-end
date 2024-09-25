import { Component } from "@angular/core";
import { UserService } from "src/app/serives/user.service";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-wait-list",
  templateUrl: "./wait-list.component.html",
  styleUrls: ["./wait-list.component.css"],
})
export class WaitListComponent {
  waitlistTable: any = {};
  constructor(
    private userSvc: UserService,
    private authSvc: AuthService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.getWaitList();
  }

  getWaitList() {
    this.userSvc.getWaitList().subscribe((res: any) => {
      this.waitlistTable = res.data;
    });
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

  closeNav() {
    const sidenav = document.getElementById("sidenav-main");
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("g-sidenav-pinned");
    sidenav?.classList.remove("bg-white");
  }
}
