import { Component, OnInit } from "@angular/core";
import { Program } from "../program"; // import the "program type"
import { PROGRAMS_SEED } from "../mock-programs";

@Component({
  selector: "app-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.css"]
})
export class ProgramsComponent implements OnInit {
  programs = PROGRAMS_SEED; //imports arrray of program instances
  selectedProgram: Program; //

  constructor() {}

  ngOnInit() {}

  //click event handler
  onSelect(program: Program): void {
    this.selectedProgram = program;
  }
}
