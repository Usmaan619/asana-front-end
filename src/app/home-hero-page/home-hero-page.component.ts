import { Component } from "@angular/core";
import { UserService } from "../serives/user.service";
import { ViewportScroller } from "@angular/common";
import { AuthService } from "../admin/auth.service";
declare let $: any;
declare let Swiper: any;

@Component({
  selector: "app-home-hero-page",
  templateUrl: "./home-hero-page.component.html",
  styleUrls: ["./home-hero-page.component.css"],
})
export class HomeHeroPageComponent {
  emailWiatlist: any = "";
  nameWiatlist: any = "";
  modNoWaitlist: any = "";
  parselyinstance: any;

  showWaitListSubMsg: any = false;
  loading: any = false;
  isShowOTP: any = false;
  otp: any = "";

  constructor(
    private userSvc: UserService,
    private scroller: ViewportScroller,
    private authSvc: AuthService
  ) {}

  ngAfterViewInit(): void {
    new Swiper(".phoneImage-slider", {
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    this.parselyinstance = $("#wait-list-form").parsley();
  }

  waitList() {
    const payload = {
      name: this.nameWiatlist,
      email: this.emailWiatlist,
      mobNo: this.modNoWaitlist,
    };

    if (this.parselyinstance?.isValid()) {
      this.loading = true;
      this.userSvc.createWaitList(payload).subscribe({
        next: (res: any) => {
          console.log("res: ", res);
        },
        complete: () => {
          (this.emailWiatlist = ""), (this.modNoWaitlist = "");
          // this.isShowOTP = true;
          // alert("OTP has been sent to your registered mail!");
          this.showWaitListSubMsg = true;
          setTimeout(() => {
            this.showWaitListSubMsg = false;
            this.loading = false;
          }, 8000);
        },

        error: (err) => {
          this.isShowOTP = false;
          this.loading = false;
          this.nameWiatlist = "";
          this.emailWiatlist = "";
          this.modNoWaitlist = "";
          alert("You’re already in a waitlist.");
        },
      });
    }
  }

  verifyOtp() {
    if (this.otp) {
      this.userSvc.verifyWaitListOtp(this.otp).subscribe({
        next: (res: any) => {},
        complete: () => {
          this.emailWiatlist = "";
          this.modNoWaitlist = "";
          this.isShowOTP = false;
          this.loading = false;
          alert("OTP verified successfully!");
          this.showWaitListSubMsg = true;
        },
        error: (err) => {
          alert("Incorrect OTP!");
        },
      });
    }
  }

  contactUsScroll() {
    this.scroller.scrollToAnchor("contactUs");
  }
}
