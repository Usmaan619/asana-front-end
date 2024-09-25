import { Component, ElementRef, ViewEncapsulation } from "@angular/core";
import { NgxPermissionsService } from "ngx-permissions";
import { AuthService } from "../auth.service";

declare let SimpleBar: any;
@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AdminLayoutComponent {
  constructor(
    private permissionsService: NgxPermissionsService,
    private auth: AuthService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.auth.userDataLoaded.subscribe({
      next: () => {
        const permissions = Array.isArray(
          this.auth.loggeInUserData?.role?.permissions
        )
          ? this.auth.loggeInUserData.role.permissions
          : [];

        const alias = permissions.map((el: any) => el.alias);

        this.permissionsService.loadPermissions(alias);
      },
    });

    this.auth.me().subscribe((res: any) => {});
  }
  ngAfterViewInit() {
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("g-sidenav-show");
    body?.classList.add("bg-gray-100");
    this.loadScript("assets/adminDashboard/js/soft-ui-dashboard.min.js");
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
