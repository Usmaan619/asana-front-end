import { Component } from "@angular/core";
import { AuthService } from "../admin/auth.service";

@Component({
  selector: "app-bhai-pay",
  templateUrl: "./bhai-pay.component.html",
  styleUrls: ["./bhai-pay.component.css"],
})
export class BhaiPayComponent {
  constructor(private authSvc: AuthService) {}

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
