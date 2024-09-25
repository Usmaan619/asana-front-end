import { Component } from "@angular/core";
import { UserService } from "../serives/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-email-verified",
  templateUrl: "./email-verified.component.html",
  styleUrls: ["./email-verified.component.css"],
})
export class EmailVerifiedComponent {
  id: any;

  constructor(private userSvc: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log("this.id : ", this.id);
    this.verifyEmail();
  }

  verifyEmail() {
    this.userSvc.verifyEmail(this.id).subscribe((res: any) => {});
  }
}
