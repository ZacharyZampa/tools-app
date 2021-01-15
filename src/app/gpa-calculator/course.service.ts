import { Injectable } from '@angular/core';
import {Course} from './Course';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseList: Course[];
  private coursesUpdated = new Subject<Course[]>();

  constructor(private http: HttpClient) {}

  getCourseList(): void {
    this.http.get<{message: string, posts: Course[]}>('http://localhost:3000/api/v1/courses')
      .subscribe((courseData) => {
        this.courseList = courseData.posts;
        this.coursesUpdated.next([...this.courseList]);
      });
  }

  getCourseUpdateListener(): Observable<Course[]> {
    return this.coursesUpdated.asObservable();
  }

  addCourse(cName: string, cCredits: number, cGrade: number): void {
    const course: Course = new Course(null, cName, cGrade, cCredits);
    this.courseList.push(course);
    this.coursesUpdated.next([...this.courseList]);
  }
}
