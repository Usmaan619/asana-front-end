import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Route,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url = environment.serverUrl;
  microUrl = environment.microUrl;
  public loggeInUserData: any;
  public userDataLoaded = new BehaviorSubject(null);
  public isImpersonateUserShow: boolean = false;

  public productDropdownShow: boolean = false;

  public aboutUsDropdownShow: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  get token() {
    return localStorage.getItem("token");
  }

  getToken() {
    return this.token;
  }

  isAuthenticated(): boolean {
    // Implement logic to check if the user is authenticated based on the token
    return !!this.getToken();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/admin/login"]);
  }

  adminLogin(payload: any) {
    return this.http.post(`${this.url}login`, payload);
  }

  me() {
    return this.http.get(`${this.url}adminMe`).pipe(
      map((res: any) => {
        try {
          if (res?.actualUser) {
            this.isImpersonateUserShow = true;
          }
          this.loggeInUserData = res.user;

          this.loggeInUserData.fullName = `${this.loggeInUserData.firstName} ${this.loggeInUserData.lastName}`;
          this.userDataLoaded.next(this.loggeInUserData);
        } catch (error) { }
        return res;
      })
    );
  }

  getBhaiToken(email: any) {
    return this.http.get(`${this.microUrl}register/${email}`);
  }

  getAllInvestor() {
    return this.http.get(`${this.microUrl}getAll`);
  }

  getInvestmentByIdApi(id: any) {
    return this.http.get(`${this.microUrl}getInvestmentById/${id}`);
  }

  getReferralByIdApi(id: any) {
    return this.http.get(`${this.microUrl}getReferralById/${id}`);
  }

  public navigateToPage(page: any) {
    switch (page) {
      case "bhaiPay":
        this.router.navigate(["/bhaipay"]);
        this.aboutUsDropdownShow = false;
        this.productDropdownShow = false;
        break;

      case "bhaiToken":
        window.open("https://www.bhaitoken.com/", "_blank");
        this.aboutUsDropdownShow = false;
        this.productDropdownShow = false;
        break;

      case "bhaiChain":
        this.router.navigate(["/bhaichain"]);
        this.aboutUsDropdownShow = false;
        this.productDropdownShow = false;
        break;

      case "team":
        this.router.navigate(["/team"]);
        this.aboutUsDropdownShow = false;
        this.productDropdownShow = false;
        break;

      case "aboutUs":
        this.router.navigate(["/about-us"]);
        this.aboutUsDropdownShow = false;
        this.productDropdownShow = false;
        break;

      default:
        break;
    }
  }

  closedDropdown() {
    this.productDropdownShow = false;
    this.aboutUsDropdownShow = false;
  }
}
