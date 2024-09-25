import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderPageComponent } from "./header-page/header-page.component";
import { FooterPageComponent } from "./footer-page/footer-page.component";
import { HomeHeroPageComponent } from "./home-hero-page/home-hero-page.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./terms-and-conditions/terms-and-conditions.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmailVerifiedComponent } from "./email-verified/email-verified.component";
import { NgxPermissionsModule } from "ngx-permissions";
import { TokenInterceptor } from "./admin/utils/token.interceptor";
import { ToastrModule } from "ngx-toastr";
import { ToasterService } from "./toaster.service";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
import { TeamPageComponent } from "./team-page/team-page.component";
import { BhaiPayComponent } from "./bhai-pay/bhai-pay.component";
import { BhaiChainComponent } from "./bhai-chain/bhai-chain.component";
import { InvestorsComponent } from "./investors/investors.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { InvestorEmailVerificationComponent } from "./investor-email-verification/investor-email-verification.component";
import { BhaiChainFooterComponent } from "./bhai-chain-footer/bhai-chain-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomePageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    HomeHeroPageComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    EmailVerifiedComponent,
    BlogComponent,
    BlogDetailsComponent,
    TeamPageComponent,
    BhaiPayComponent,
    BhaiChainComponent,
    InvestorsComponent,
    InvestorEmailVerificationComponent,
    BhaiChainFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    ToasterService,
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
