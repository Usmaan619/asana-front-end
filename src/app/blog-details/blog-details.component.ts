import { Component } from "@angular/core";
import { UserService } from "../serives/user.service";
import { ActivatedRoute } from "@angular/router";
import { Meta } from "@angular/platform-browser";
import * as moment from "moment";

@Component({
  selector: "app-blog-details",
  templateUrl: "./blog-details.component.html",
  styleUrls: ["./blog-details.component.css"],
})
export class BlogDetailsComponent {
  moment = moment;

  blogUrl: any;
  blogId: any;
  blogData: any;

  tags: any = [];

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.blogUrl = this.route.snapshot.paramMap.get("id");
    if (this.blogUrl) {
      const idArray = this.blogUrl.split("-");
      this.blogId = idArray.pop();
    }

    this.getBlogById();
  }

  getBlogById() {
    this.userSvc.getBlogDetailById(this.blogId).subscribe((res: any) => {
      this.blogData = res?.data;
      this.tags = res?.data?.tags.split(",");
      this.metaTagService.addTags(this.tags);
    });
  }
}
