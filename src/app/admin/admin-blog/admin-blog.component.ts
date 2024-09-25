import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Editor, Toolbar, Validators, toHTML } from "ngx-editor";
import { UserService } from "src/app/serives/user.service";

@Component({
  selector: "app-admin-blog",
  templateUrl: "./admin-blog.component.html",
  styleUrls: ["./admin-blog.component.css"],
})
export class AdminBlogComponent {
  allBlogs: any;
  blogName: any;
  description: any;
  startDate: any;
  endDate: any;
  blogTitleImg: any;
  blogStatus: any;

  showEditor = true;
  isEditingDisabled: boolean = true;
  authorName: any;
  tags: any;

  htmlTexEditor: any;
  editor: any = Editor;
  blogParagraph: any;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"],
  ];

  constructor(private userSvc: UserService) {}
  form = new FormGroup({
    editorContent: new FormControl(
      { value: "", disabled: false },
      Validators.required()
    ),
  });

  get doc(): AbstractControl | any {
    return this.form.get("editorContent")?.value;
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.getBlogs();
  }

  onChangeTab(type: any) {
    if (type == "editor") {
      this.showEditor = true;
    }

    if (type == "preview") {
      this.showEditor = false;
    }
  }

  onSelectBlogImage(event: any) {
    this.blogTitleImg = event.target.files[0];
  }

  onChangeBlogStatus($event: any) {
    this.blogStatus = $event;
  }

  editorChange(event: any) {}

  createBlog() {
    let formData = new FormData();
    formData.append("blogName", this.blogName);
    formData.append("description", this.description);
    formData.append("startDate", this.startDate);
    formData.append("endDate", this.endDate);
    formData.append("about", this.doc);
    formData.append("blogTitleImg", this.blogTitleImg);
    formData.append("status", this.blogStatus);
    formData.append("tags", this.tags);
    formData.append("authorName", this.authorName);

    this.userSvc.createBlogs(formData).subscribe((res: any) => {
      this.getBlogs();
    });
  }

  getBlogs() {
    this.userSvc.getAllBlogs().subscribe((res: any) => {
      this.allBlogs = res.data;
    });
  }
}
