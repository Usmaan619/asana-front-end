import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { setCache } from "../utils/helper";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email: any;
  password: any;
  token: any;
  rememberMe: Boolean = false;

  disabled = false;

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {}

  login() {
    this.disabled = true;
    this.authSvc
      .adminLogin({
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      })
      .subscribe({
        next: (res: any) => {
          setCache("token", res.token);
          this.router.navigate(["/dashboard"]);
          this.toaster.success("Your successfully login");
        },
        error: (err) => {
          this.disabled = false;
        },
        complete: () => {
          this.disabled = false;
        },
      });
  }
}
