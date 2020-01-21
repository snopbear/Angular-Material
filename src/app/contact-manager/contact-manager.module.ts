import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../shared/material.module";
import { Routes, RouterModule } from "@angular/router";
import { ContactManagerAppComponent } from "./contact-manager-app.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { UserService } from "./service/_user/user.service";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: "",
    component: ContactManagerAppComponent,
    children: [
      { path: ":id", component: MainContentComponent },
      { path: "", component: MainContentComponent }]
  },
  { path: "**", redirectTo: "" }
];



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [
    ContactManagerAppComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent
  ],
  providers: [UserService]
})
export class ContactManagerModule {}
