import { Component, ViewEncapsulation } from "@angular/core";
import { Route } from "@angular/router";
import { Router } from "express";
import { UserService } from "../serives/user.service";
import { ViewportScroller } from "@angular/common";
import { AuthService } from "../admin/auth.service";
declare let $: any;

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
  // encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
  contactUsName: any = "";
  contactUsEmail: any = "";
  contactUsMsg: any = "";
  contactUsSubject: any = "";
  parselyinstance: any;
  showContactUs: any = false;
  loading: any = false;
  hash: any;

  constructor(
    private userSvc: UserService,
    private scroller: ViewportScroller,
    private authSvc: AuthService
  ) {}

  ngOnInit() {}

  bhaiPay() {
    try {
      const url = "https://www.bhaipay.io";
      window.open(url, "_blank");
    } catch (error) {}
  }

  ngAfterViewInit(): void {
    this.parselyinstance = $("#contact-us-form").parsley();

    this.hash = location.hash;
    console.log("this.hash:home ", this.hash);
    if (this.hash) {
      this.navigateToSection();
    }
  }

  navigateToSection() {
    switch (this.hash) {
      case "#contact-us":
        setTimeout(() => {
          this.scroller.scrollToAnchor("contactUs");
        }, 500);

        break;

      case "#features":
        setTimeout(() => {
          this.scroller.scrollToAnchor("features");
        }, 500);

        break;

      case "#aboutUs":
        setTimeout(() => {
          this.scroller.scrollToAnchor("aboutUs");
        }, 500);

        break;
    }
  }

  contactUs() {
    if (this.parselyinstance?.isValid()) {
      this.loading = true;

      this.userSvc
        .createContactUS({
          name: this.contactUsName,
          subject: this.contactUsSubject,
          message: this.contactUsMsg,
          email: this.contactUsEmail,
        })
        .subscribe({
          next: (res: any) => {
            console.log("res: ", res);
          },
          complete: () => {
            (this.contactUsName = ""),
              (this.contactUsSubject = ""),
              (this.contactUsMsg = ""),
              (this.contactUsEmail = "");
            this.showContactUs = true;
            setTimeout(() => {
              this.showContactUs = false;
              this.loading = false;
            }, 8000);
          },
          error: (e) => {
            console.log("e: ", e);
          },
        });
    }
  }

  meetFounder() {
    try {
      const url = "https://www.maazmemon.com/home";
      window.open(url, "_blank");
    } catch (error) {}
  }

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
