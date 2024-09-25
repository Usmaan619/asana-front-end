import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminSidebarComponent } from "./admin-sidebar/admin-sidebar.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { WaitListComponent } from "./wait-list/wait-list.component";
import { UsersComponent } from "./users/users.component";
import { CommanTableComponent } from "./comman-table/comman-table.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPermissionsModule } from "ngx-permissions";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./utils/token.interceptor";
import { UnauthorizedComponent } from "../unauthorized/unauthorized.component";
import { SettingComponent } from "./setting/setting.component";
import { UserSettingComponent } from "./user-setting/user-setting.component";
import { CountrySettingComponent } from "./country-setting/country-setting.component";
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { AdminBlogComponent } from "./admin-blog/admin-blog.component";
import { NgxEditorModule } from "ngx-editor";
import { AdminBhaiTokenComponent } from './admin-bhai-token/admin-bhai-token/admin-bhai-token.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    WaitListComponent,
    UsersComponent,
    CommanTableComponent,
    LoginComponent,
    UnauthorizedComponent,
    SettingComponent,
    UserSettingComponent,
    CountrySettingComponent,
    AdminBlogComponent,
    AdminBhaiTokenComponent,
    // NavBarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxEditorModule,

    NgxPermissionsModule.forChild(),
  ],
})
export class AdminModule {}
