import { Component } from "@angular/core";
import { UserService } from "../serives/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-investor-email-verification",
  templateUrl: "./investor-email-verification.component.html",
  styleUrls: ["./investor-email-verification.component.css"],
})
export class InvestorEmailVerificationComponent {
  id: any;

  constructor(private userSvc: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.verifyEmail();
  }

  verifyEmail() {
    this.userSvc.investorVerifyEmail(this.id).subscribe((res: any) => {});
  }
}
