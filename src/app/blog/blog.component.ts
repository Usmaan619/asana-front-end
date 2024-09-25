import { Component } from "@angular/core";
import { UserService } from "../serives/user.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AuthService } from "../admin/auth.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent {
  moment = moment;

  allBlogs: any;
  BlogUrl: any;
  blogId: any;

  constructor(
    private userSvc: UserService,
    private router: Router,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.userSvc.getAllBlogs().subscribe((res: any) => {
      this.allBlogs = res.data;
    });
  }

  getBlogDetails(blog: any) {
    this.BlogUrl = "Nan";
    this.blogId = blog._id;

    this.router.navigate([
      "blog-details",
      (blog?.blogUrl ? blog?.blogUrl : this.BlogUrl + "-") + this.blogId,
    ]);
  }

  closedDropdown() {
    this.authSvc.closedDropdown();
  }
}
