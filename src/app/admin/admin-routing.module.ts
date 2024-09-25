import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { WaitListComponent } from "./wait-list/wait-list.component";
import { UsersComponent } from "./users/users.component";
import { CommanTableComponent } from "./comman-table/comman-table.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "../auth.guard";
import { SettingComponent } from "./setting/setting.component";
import { AdminBlogComponent } from "./admin-blog/admin-blog.component";
import { AdminBhaiTokenComponent } from "./admin-bhai-token/admin-bhai-token/admin-bhai-token.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: AdminDashboardComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "waitList",
        component: WaitListComponent,
        // canActivate: [AuthGuard],
      },
      { path: "users", component: UsersComponent, 
        // canActivate: [AuthGuard] 
      },
      {
        path: "create-blog",
        component: AdminBlogComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "bhaiToken",
        component: AdminBhaiTokenComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: "setting",
        component: SettingComponent,
        // canActivate: [AuthGuard],
      },
      { path: "table", component: CommanTableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
