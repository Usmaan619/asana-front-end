import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { constants } from "buffer";
import { CONSTANTS } from "./constant";
import { AuthService } from "./admin/auth.service";
import { NgxPermissionsService } from "ngx-permissions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "bhai-pay";

  headerScroll = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private metaTagService: Meta,
    private authSvc: AuthService
  ) {}
  ngOnInit() {
    this.metaTagService.addTags(CONSTANTS.seoTags);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      this.headerScroll = true;
    } else {
      this.headerScroll = false;
    }
  }
}
