import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { ChildComponent } from "./child/child.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChildComponent
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [
    provideClientHydration()
  ]
})
export class AppModule {}