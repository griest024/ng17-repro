import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}