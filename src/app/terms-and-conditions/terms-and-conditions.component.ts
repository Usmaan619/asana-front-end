import { DOCUMENT, ViewportScroller } from "@angular/common";
import { Component, HostListener, Inject } from "@angular/core";

@Component({
  selector: "app-terms-and-conditions",
  templateUrl: "./terms-and-conditions.component.html",
  styleUrls: ["./terms-and-conditions.component.css"],
})
export class TermsAndConditionsComponent {
  headerScroll = false;

  navbar = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private scroller: ViewportScroller
  ) {}

  ngOnInit() {
    document.body.scroll(0, 0);
    document.scrollingElement?.scroll(0, 0);
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
