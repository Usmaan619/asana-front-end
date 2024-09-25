import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  toastConfig = {
    timeOut: 3000,
    closeButton: true,
    enableHtml: true,
    progressBar: true,
    positionClass: "toast-bottom-right",
  };

  constructor(private toastrService: ToastrService) {}
  Success(message = "", title?: string) {
    this.toastrService.success(message, title, this.toastConfig);
  }

  Error(message = "", title?: string) {
    this.toastrService.error(message, title, this.toastConfig);
  }

  ErrorTimeOut(errMessag: string) {
    this.toastrService.error(
      errMessag ? errMessag : "Something went wrong, Please try again later.",
      "",
      this.toastConfig
    );
  }
}
