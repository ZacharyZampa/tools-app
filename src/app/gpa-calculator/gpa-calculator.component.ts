import { Component, OnInit } from '@angular/core';
import {Course} from "./Course";

@Component({
  selector: 'app-gpa-calculator',
  templateUrl: './gpa-calculator.component.html',
  styleUrls: ['./gpa-calculator.component.css']
})
export class GpaCalculatorComponent implements OnInit {
  editClicked = false;
  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
