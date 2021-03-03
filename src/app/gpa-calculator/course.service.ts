import { Injectable } from '@angular/core';
import {Course} from './Course';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseList: Course[];
  coursesUpdated = new Subject<Course[]>();

  constructor(private http: HttpClient) {}

  getCourseList(): Course[] {

    // --- Use this if I ever feel / get around to making user auth and saving of courses
    // this.http.get<{message: string, posts: Course[]}>('http://localhost:3000/api/v1/courses')
    //   .subscribe((courseData) => {
    //     this.courseList = courseData.posts;
    //     this.coursesUpdated.next([...this.courseList]);
    //   });

    this.courseList = new Array();

    // --- Use this for sample fake data
    // for (let i = 0; i < 20; i++) {
    //   this.courseList.push(new Course("" + i, "CSE " + i, 3.7, 3));
    //   this.coursesUpdated.next(this.courseList.slice());
    // }

    // sample course if none added yet
    if (this.courseList.length === 0) {
      this.courseList.push(new Course("1", "CSE " + 101, 3.7, 3));
      this.coursesUpdated.next(this.courseList.slice());
    }
    
    return this.courseList.slice();
  }


  addCourse(cName: string, cCredits: number, cGrade: number): void {
    const course: Course = new Course(null, cName, cGrade, cCredits);
    this.courseList.push(course);
    this.coursesUpdated.next([...this.courseList]);
  }
}
