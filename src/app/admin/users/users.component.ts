import { Component } from "@angular/core";
import { UserService } from "src/app/serives/user.service";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent {
  users: any = {};
  constructor(
    private userSvc: UserService,
    private authSvc: AuthService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userSvc.getAllUser().subscribe((res: any) => {
      this.users = res.data;
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

 

 
}
