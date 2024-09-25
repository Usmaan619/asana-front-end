import { Component } from "@angular/core";

@Component({
  selector: "app-privacy-policy",
  templateUrl: "./privacy-policy.component.html",
  styleUrls: ["./privacy-policy.component.css"],
})
export class PrivacyPolicyComponent {
  ngOnInit() {
    document.body.scroll(0, 0);
    document.scrollingElement?.scroll(0, 0);
  }
}
