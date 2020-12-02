import { Component, OnInit } from "@angular/core";
import { Program } from "../program"; // import the "program type"

@Component({
  selector: "app-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.css"]
})
export class ProgramsComponent implements OnInit {
  // statically defining a test program
  program: Program = {
    id: 0,
    name: "Mt Dev",
    //birthday: Date(),
    active: true
  };

  constructor() {}

  ngOnInit() {}
}
