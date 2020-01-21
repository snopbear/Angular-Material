import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../shared/material.module";
import { Routes, RouterModule } from "@angular/router";
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


const routes: Routes = [
  {
    path: "",
    component: ContactManagerAppComponent,
    children: [

      { path: "", component: MainContentComponent }
    ]
  },
  { path: "**", redirectTo: "" }
];

// { path: ":id", component: MainContentComponent },

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactManagerAppComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent
  ]
})
export class ContactManagerModule {}
