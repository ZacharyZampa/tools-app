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
    // this.http.get<{message: string, posts: Course[]}>('http://localhost:3000/api/v1/courses')
    //   .subscribe((courseData) => {
    //     this.courseList = courseData.posts;
    //     this.coursesUpdated.next([...this.courseList]);
    //   });

    this.courseList = new Array();
    for (let i = 0; i < 20; i++) {
      this.courseList.push(new Course("" + i, "CSE " + i, 3.7, 3));
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
