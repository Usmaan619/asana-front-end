import { Component } from "@angular/core";
import { AuthService } from "../admin/auth.service";

@Component({
  selector: "app-bhai-chain",
  templateUrl: "./bhai-chain.component.html",
  styleUrls: ["./bhai-chain.component.css"],
})
export class BhaiChainComponent {
  constructor(private authSvc: AuthService) {}

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
