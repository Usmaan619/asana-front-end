import { Component } from "@angular/core";
import { UserService } from "src/app/serives/user.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent {
  totalCountData: any;
  isLoading: boolean = true;

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    this.getAdminCount();
  }

  getAdminCount() {
    this.userSvc.getAdminCounts().subscribe((res: any) => {
      this.totalCountData = res;
      this.isLoading = false;
    });
  }
  ngAfterViewInit() {}

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
