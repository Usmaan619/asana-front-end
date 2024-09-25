import { Component, ElementRef, ViewChild } from "@angular/core";
import { AuthService } from "../../auth.service";
import { ToasterService } from "src/app/toaster.service";
import * as moment from "moment";
declare let window: any;
@Component({
  selector: "app-admin-bhai-token",
  templateUrl: "./admin-bhai-token.component.html",
  styleUrls: ["./admin-bhai-token.component.css"],
})
export class AdminBhaiTokenComponent {
  @ViewChild("textToCopy", { static: false }) textToCopy!: ElementRef;
  @ViewChild("textToCopySingle", { static: false })
  textToCopySingle!: ElementRef;
  @ViewChild("copyToReferralCode", { static: false })
  copyToReferralCode!: ElementRef;
  @ViewChild("copyToTransactionHash", { static: false })
  copyToTransactionHash!: ElementRef;

  moment = moment;
  email: any;
  bhaiToken: any;
  investors: any;
  investorId: any;
  investmentData: any = [];
  referralData: any = [];

  constructor(private authSvc: AuthService, private toastr: ToasterService) {}

  ngOnInit(): void {
    this.getAllInvestors();
  }

  getBhaiTokenByEmail() {
    this.bhaiToken = "";

    this.authSvc.getBhaiToken(this.email).subscribe({
      next: (res: any) => {
        this.bhaiToken = res?.code;
        this.getAllInvestors();
      },
    });
  }

  getAllInvestors() {
    this.authSvc.getAllInvestor().subscribe({
      next: (res: any) => {
        this.investors = res?.investors;
      },
    });
  }

  getInvestmentById(id: any) {
    this.authSvc.getInvestmentByIdApi(id).subscribe({
      next: (res: any) => {
        this.investmentData = res?.data;
      },
    });
  }

  getReferralById(id: any) {
    this.authSvc.getReferralByIdApi(id).subscribe({
      next: (res: any) => {
        this.referralData = res?.data;
      },
    });
  }

  copyDivToClipboard(element: HTMLElement) {
    const range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range); // Select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // Deselect
    this.toastr.Success("Copied");
  }

  closeModal() {
    document.getElementById("closeModal")?.click();
    this.bhaiToken = "";
    this.email = "";
  }

  navbarToggle() {
    const iconSidenav = document.getElementById("iconSidenav");
    const sidenav = document.getElementById("sidenav-main");
    let body = document.getElementsByTagName("body")[0];

    let className = "g-sidenav-pinned";

    if (body.classList.contains(className)) {
      body.classList.remove(className);
      setTimeout(() => {
        sidenav?.classList.remove("bg-white");
      }, 100);
      sidenav?.classList.remove("bg-transparent");
    } else {
      body.classList.add(className);
      sidenav?.classList.add("bg-white");
      sidenav?.classList.remove("bg-transparent");
      iconSidenav?.classList.remove("d-none");
    }
  }

  closeNav() {
    const sidenav = document.getElementById("sidenav-main");
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("g-sidenav-pinned");
    sidenav?.classList.remove("bg-white");
  }
}
