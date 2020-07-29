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
  gpa = -1;

  editCourseIndex = -1;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.courses.push(new Course("name", 4, 3));
    }
    this.calculateGPA();
  }

  onEdit(courseIndex: number) {
    this.editClicked = true;
    this.editCourseIndex = courseIndex;
  }

  onDelete(courseIndex: number) {
    this.courses.splice(courseIndex,1);

    this.editClicked = false;
    this.editCourseIndex = -1;
    this.calculateGPA();
  }

  addCourse(courseInfo: { "course": Course, "index" : number }) {
    if (courseInfo["index"] !== -1) {
      this.courses.splice(this.editCourseIndex,1, courseInfo["course"]);
      this.editCourseIndex = -1;
      this.calculateGPA();
      return;
    }

    this.courses.push(courseInfo["course"]);
    this.calculateGPA();
  }

  calculateGPA() {
    let creditTotal = 0;
    this.gpa = 0
    for (let course of this.courses) {
      this.gpa += course.grade * course.credits;
      creditTotal += course.credits;
    }

    this.gpa = +(this.gpa / creditTotal).toFixed(2);
  }
}
