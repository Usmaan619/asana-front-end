import { ViewportScroller } from "@angular/common";
import { Component } from "@angular/core";
import { AuthService } from "../admin/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-bhai-chain-footer",
  templateUrl: "./bhai-chain-footer.component.html",
  styleUrls: ["./bhai-chain-footer.component.css"],
})
export class BhaiChainFooterComponent {
  constructor(
    private scroller: ViewportScroller,
    public authSvc: AuthService,
    private router: Router
  ) {}

  features() {
    this.scroller.scrollToAnchor("features");
  }

  contactUs() {
    this.scroller.scrollToAnchor("contactUs");
  }
  hero() {
    this.scroller.scrollToAnchor("hero");
  }

  bhaiPay() {
    try {
      const url = "https://www.bhaipay.io";
      window.open(url, "_blank");
    } catch (error) {}
  }

  faceBookLink() {
    try {
      const url = "https://www.facebook.com/bhaifinance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  instagramLink() {
    try {
      const url = "https://instagram.com/bhaifinance?igshid=MWZjMTM2ODFkZg==";
      window.open(url, "_blank");
    } catch (error) {}
  }

  Ourplatforms() {
    try {
      const url = "https://www.bhaipay.io/home";
      window.open(url, "_blank");
    } catch (error) {}
  }

  linkedinLink() {
    try {
      const url = "https://www.linkedin.com/company/bhai-finance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  twitter() {
    try {
      const url = "https://x.com/bhai_finance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  ticktok() {
    try {
      const url = "https://www.tiktok.com/@bhaifinance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  telegram() {
    try {
      const url = "https://t.me/bhaifinance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  teligram() {
    try {
      const url = "https://t.me/bhaifinance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  meetFounder() {
    try {
      const url = "https://www.maazmemon.com/home";
      window.open(url, "_blank");
    } catch (error) {}
  }

  product() {
    this.authSvc.aboutUsDropdownShow = false;
    this.authSvc.productDropdownShow = !this.authSvc.productDropdownShow;
  }

  aboutUs() {
    this.authSvc.productDropdownShow = false;
    this.authSvc.aboutUsDropdownShow = !this.authSvc.aboutUsDropdownShow;
  }

  navigateToPage(name: any) {
    this.authSvc.navigateToPage(name);
  }

  bhaifinanceLogo() {
    this.router.navigate([""]);
  }
}
