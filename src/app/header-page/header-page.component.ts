import { AuthService } from "./../admin/auth.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { DOCUMENT, ViewportScroller } from "@angular/common";
import { Component, HostListener, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header-page",
  templateUrl: "./header-page.component.html",
  styleUrls: ["./header-page.component.css"],
  animations: [
    trigger("openCloseAnimation", [
      state(
        "open",
        // style({ width: "300px", height: "380px", display: "block" })
        style({ width: "100%", height: "100vh", display: "block" })
      ),
      state("close", style({ width: "300px", display: "none" })),
      transition("close <=> open", [animate(".25s")]),
    ]),

    trigger("show", [
      transition(":enter", [
        style({
          transform: "scaleY(0.7",
          transformOrigin: "50% 0",
          opacity: 0,
        }),
        animate(
          ".5s",
          style({
            transform: "scaleY(1)",
            transformOrigin: "50% 0",
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class HeaderPageComponent {
  headerScroll: any = false;

  navbar: any = false;
  hash: any;
  nav: any = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private scroller: ViewportScroller,
    private router: Router,
    public authSvc: AuthService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.hash = location.hash;
    if (this.hash) {
      this.navigateToSection();
    }
  }

  openNaveBar() {
    if (this.navbar) {
      this.navbar = false;
    } else {
      this.navbar = true;
    }
  }

  closeNaveBar() {
    this.navbar = false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      this.headerScroll = true;
    } else {
      this.headerScroll = false;
    }
  }

  featuresScroll() {
    this.navbar = false;

    this.scroller.scrollToAnchor("features");
  }

  aboutUsScroll() {
    this.navbar = false;
    this.scroller.scrollToAnchor("aboutUs");
  }

  contactUsScroll() {
    this.authSvc.closedDropdown();

    this.navbar = false;
    this.scroller.scrollToAnchor("contactUs");

    if (
      [
        "/team",
        "/about-us",
        "/bhaipay",
        "/bhaichain",
        "/investor",
        "/blogs",
      ].includes(location.pathname)
    ) {
      this.router.navigate([""]);
      setTimeout(() => {
        this.scroller.scrollToAnchor("contactUs");
      }, 500);
    }
  }
  hero() {
    this.authSvc.closedDropdown();

    this.scroller.scrollToAnchor("hero");
  }

  closeNaveBarHome() {
    this.navbar = false;
    this.scroller.scrollToAnchor("hero");
  }

  closeNaveBarFeatures() {
    this.navbar = false;
    // this.product()
    this.scroller.scrollToAnchor("features");
  }

  closeNaveBarContactUs() {
    this.navbar = false;
    // location.hash = "contact-us";
    this.scroller.scrollToAnchor("contactUs");
  }

  istagramLink() {
    try {
      const url = "https://instagram.com/bhaifinance?igshid=MWZjMTM2ODFkZg==";
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

  teligram() {
    try {
      const url = "https://t.me/bhaifinance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  navigateToSection() {
    switch (this.hash) {
      case "#contact-us":
        {
          this.contactUsScroll();
        }
        break;

      case "#features":
        {
          this.featuresScroll();
        }
        break;
      case "#aboutUs":
        {
          this.aboutUsScroll();
        }
        break;
    }
  }

  mainlogo() {
    this.router.navigate([""]);
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
    console.log("name: ", name);
    this.authSvc.navigateToPage(name);
  }

  telegram() {
    try {
      const url = "https://t.me/bhaifinance";
      window.open(url, "_blank");
    } catch (error) {}
  }

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
