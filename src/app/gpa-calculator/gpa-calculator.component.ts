import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import {CourseService} from './course.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-gpa-calculator',
  templateUrl: './gpa-calculator.component.html',
  styleUrls: ['./gpa-calculator.component.css']
})
export class GpaCalculatorComponent implements OnInit {
  editClicked = false;
  courses: Course[] = [];
  private courseSub: Subscription;
  gpa = -1;

  editCourseIndex = -1;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourseList();
    this.courseSub = this.courseService.getCourseUpdateListener()
      .subscribe((courseList: Course[]) => {
        this.courses = courseList;
      });
    this.calculateGPA();
  }

  onEdit(courseIndex: number): void {
    this.editClicked = true;
    this.editCourseIndex = courseIndex;
  }

  onDelete(courseIndex: number): void {
    this.courses.splice(courseIndex, 1);

    this.editClicked = false;
    this.editCourseIndex = -1;
    this.calculateGPA();
  }

  addCourse(courseInfo: { 'course': Course, 'index': number }): void {
    if (courseInfo.index !== -1) {
      this.courses.splice(this.editCourseIndex, 1, courseInfo.course);
      this.editCourseIndex = -1;
      this.calculateGPA();
      return;
    }

    this.courses.push(courseInfo.course);
    this.calculateGPA();
  }

  calculateGPA(): void {
    let creditTotal = 0;
    this.gpa = 0;
    for (const course of this.courses) {
      this.gpa += course.grade * course.credits;
      creditTotal += course.credits;
    }

    this.gpa = +(this.gpa / creditTotal).toFixed(2);
  }
}
