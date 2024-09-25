import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url = environment.serverUrl;

  constructor(private http: HttpClient) {}

  createContactUS(payload: any) {
    return this.http.post(`${this.url}user/contactUs`, payload);
  }

  createWaitList(payload: any) {
    return this.http.post(`${this.url}user/waitList`, payload);
  }

  createInvestor(payload: any) {
    return this.http.post(`${this.url}user/investor`, payload);
  }

  verifyEmail(id: any) {
    return this.http.get(`${this.url}user/verifyWaitListEmail/${id}`);
  }

  investorVerifyEmail(id: any) {
    return this.http.get(`${this.url}user/verifyInvestorEmail/${id}`);
  }

  getWaitList() {
    return this.http.get(`${this.url}user/getWaitList`);
  }

  getAdminCounts() {
    return this.http.get(`${this.url}user/getAdminCount`);
  }

  verifyWaitListOtp(otp: any) {
    return this.http.get(`${this.url}user/verifyWaitListOtp/${otp}`);
  }

  getAllUser() {
    return this.http.get(`${this.url}user/getAllUser`);
  }

  getAllBlogs() {
    return this.http.get(`${this.url}blogs/getBlogs`);
  }

  getBlogDetailById(blogId: any) {
    return this.http.get(`${this.url}blogs/getBlogById?blogId=${blogId}`);
  }

  createBlogs(payload: any) {
    return this.http.post(`${this.url}blogs/createBlogs`, payload);
  }
}
