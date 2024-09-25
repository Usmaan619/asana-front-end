import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { HomePageComponent } from "./home-page/home-page.component";
// import { FooterPageComponent } from "./footer-page/footer-page.component";
// import { AboutUsComponent } from "./about-us/about-us.component";
// import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
// import { TermsAndConditionsComponent } from "./terms-and-conditions/terms-and-conditions.component";
// import * as path from "path";
// import { EmailVerifiedComponent } from "./email-verified/email-verified.component";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
// import { TeamPageComponent } from "./team-page/team-page.component";
// import { BhaiPayComponent } from "./bhai-pay/bhai-pay.component";
// import { BhaiChainComponent } from "./bhai-chain/bhai-chain.component";
// import { InvestorsComponent } from "./investors/investors.component";
// import { InvestorEmailVerificationComponent } from "./investor-email-verification/investor-email-verification.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  // {
  //   path: "",
  //   component: HomePageComponent,
  // },
  // {
  //   path: "footer",
  //   component: FooterPageComponent,
  // },
  // {
  //   path: "about-us",
  //   component: AboutUsComponent,
  // },

  // {
  //   path: "team",
  //   component: TeamPageComponent,
  // },
  // {
  //   path: "bhaipay",
  //   component: BhaiPayComponent,
  // },

  // {
  //   path: "bhaichain",
  //   component: BhaiChainComponent,
  // },

  // {
  //   path: "investor",
  //   component: InvestorsComponent,
  // },
  // {
  //   path: "privacy-Policy",
  //   component: PrivacyPolicyComponent,
  // },
  // {
  //   path: "terms-n-condition",
  //   component: TermsAndConditionsComponent,
  // },
  // {
  //   path: "email-verified/:id",
  //   component: EmailVerifiedComponent,
  // },

  // {
  //   path: "investor-verification/:id",
  //   component: InvestorEmailVerificationComponent,
  // },
  {
    path: "",
    loadChildren: () =>
      import("./admin/admin.module").then((module) => module.AdminModule),
  },

  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "blogs", component: BlogComponent },
  { path: "blog-details/:id", component: BlogDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
