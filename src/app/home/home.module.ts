import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
