import { Component, OnInit } from "@angular/core";
import { PROGRAMS_SEED } from "../mock-programs";
import { Program } from "../program"; // import the "program type"

@Component({
  selector: "app-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.css"]
})
export class ProgramsComponent implements OnInit {
  programs = PROGRAMS_SEED;
  constructor() {}

  ngOnInit() {}
}
