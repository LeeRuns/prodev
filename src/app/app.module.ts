import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProgramsComponent } from './programs/programs.component';

// Adding array of routes
const routes: Routes = [];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent, ProgramsComponent, ProgramsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
