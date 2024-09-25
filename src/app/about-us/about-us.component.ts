import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../admin/auth.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent {
  hash: any;

  constructor(private router: Router, private authSvc: AuthService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.hash = location.hash;
    if (this.hash) {
      this.navigateToSection();
    }
  }

  navigateToSection() {
    switch (this.hash) {
      case "contact-us":
        // this.scroller.scrollToAnchor("contactUs");
        this.router.navigate(["home"]);

        break;

      case "features":
        // this.scroller.scrollToAnchor("features");
        this.router.navigate(["home"]);

        break;
    }
  }

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
