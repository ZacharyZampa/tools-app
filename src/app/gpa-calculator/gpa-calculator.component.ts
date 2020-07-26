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

  editCourseIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(courseIndex: number) {
    this.editClicked = true;
    this.editCourseIndex = courseIndex;
  }

  onDelete(courseIndex: number) {
    this.courses.splice(courseIndex,1);

    this.editClicked = false;
  }

  addCourse(courseInfo: { "course": Course, "index" : number }) {
    if (courseInfo["index"] !== -1) {
      this.courses.splice(this.editCourseIndex,1, courseInfo["course"]);
      return;
    }

    this.courses.push(courseInfo["course"]);
  }
}
