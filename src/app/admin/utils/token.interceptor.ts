import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";
// import { AuthService } from "../services/auth.service";
// import { ToasterService } from "../services/toaster.service";
import { getCache } from "./helper";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    // private toaster: ToasterService // private authService: AuthService,
    private authSvc: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request)).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const res: any = event?.body;
          if (res.success && res.message) {
            this.toaster.success(res.message);
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 429) {
          this.toaster.error(error?.error?.message);
        }
        if (error.status === 401) {
          this.toaster.error("Please login again");
          // this.authService.logOut();
          this.router.navigate(["/admin/login"]);
        }

        if (error.status === 422 || error.status === 404) {
          this.toaster.error(error?.error?.message || "Something went wrong.");
        }
        return throwError(error);
      })
    );
  }

  addAuthToken(request: HttpRequest<any>) {
    const token = this.authSvc.getToken();
    if (token) {
      return request.clone({
        setHeaders: {
          authorization: `${token}`,
        },
      });
    }
    return request;
  }
}
