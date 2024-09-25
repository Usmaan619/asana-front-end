import { Component } from "@angular/core";
import { ToasterService } from "../toaster.service";
import { UserService } from "../serives/user.service";
import { AuthService } from "../admin/auth.service";

@Component({
  selector: "app-investors",
  templateUrl: "./investors.component.html",
  styleUrls: ["./investors.component.css"],
})
export class InvestorsComponent {
  firstName: any;
  lastName: any;
  email: any;
  number: any;
  investorType: any;

  submitting = false;
  showMessage = false;
  showDropdown = false;

  constructor(
    private toaster: ToasterService,
    private userSvc: UserService,
    private authSvc: AuthService
  ) {}

  ngOnInit() {}

  openDropdown() {
    if (this.showDropdown) {
      this.showDropdown = false;
    } else {
      this.showDropdown = true;
    }
  }

  options(opt: any) {
    switch (opt) {
      case "Individual/ Angel Investor":
        this.investorType = "Individual/ Angel Investor";
        this.showDropdown = false;

        break;

      case "Venture Capital":
        this.investorType = "Venture Capital";
        this.showDropdown = false;

        break;
      case "private equity":
        this.investorType = "private equity";
        this.showDropdown = false;

        break;
      case "family office":
        this.investorType = "family office";
        this.showDropdown = false;

        break;
      case "Syndicate":
        this.investorType = "Syndicate";
        this.showDropdown = false;

        break;

      default:
        break;
    }
  }

  createInvestor() {
    if (!this.firstName) {
      return this.toaster.Error("Please fill the first name");
    }
    if (!this.lastName) {
      return this.toaster.Error("Please fill the last name");
    }
    if (!this.email) {
      return this.toaster.Error("Please fill the email");
    }
    if (!this.number) {
      return this.toaster.Error("Please fill the contact number");
    }
    if (!this.investorType) {
      return this.toaster.Error("Please fill the investor type");
    }
    this.submitting = true;

    const payload = {
      email: this.email,
      lastName: this.lastName,
      mobNo: this.number,
      name: this.firstName,
      investorType: this.investorType,
    };

    this.userSvc.createInvestor(payload).subscribe({
      next: (res: any) => {},
      complete: () => {
        this.submitting = false;
        this.showMessage = true;

        setTimeout(() => {
          this.firstName = "";
          this.lastName = "";
          this.number = "";
          this.email = "";
          this.investorType = "";
          this.showMessage = false;
        }, 8000);
      },

      error: (err) => {
        this.submitting = false;

        alert("You’re already a investor.");
      },
    });
  }

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
