import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Course} from "../Course";

@Component({
  selector: 'app-gpa-calculator-edit',
  templateUrl: './gpa-calculator-edit.component.html',
  styleUrls: ['./gpa-calculator-edit.component.css']
})
export class GpaCalculatorEditComponent implements OnInit {
  @Input() haveEditForm: boolean;
  @Input() course: Course;
  @Input() editIndex: number;
  @Output() haveFormStatus = new EventEmitter();
  @Output() courseSubmitted = new EventEmitter();

  courseForm: FormGroup;

  gradeChoices = new Map([
    ["A", 4.0],
    ["A-", 3.7],
    ["B+", 3.3],
    ["B", 3.0],
    ["B-", 2.7],
    ["C+", 2.3],
    ["C", 2.0],
    ["C-", 1.7],
    ["D+", 1.3],
    ["D", 1.0],
    ["F", 0.0],
  ]);

  constructor() { }

  ngOnInit(): void {
    console.log('Course: ' + this.course);
    if (this.course !== undefined) {
      const name = this.course.name;
      const grade = this.course.grade;
      const credits = this.course.credits;
      this.courseForm = new FormGroup({
        'name': new FormControl(name, Validators.required),
        'grade': new FormControl(grade, Validators.required),
        'credits': new FormControl(credits, Validators.required),
      });
    } else {
      this.courseForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'grade': new FormControl(null, Validators.required),
        'credits': new FormControl(null, Validators.required),
      });
    }
  }

  onSubmit() {
    this.course = new Course(
      this.courseForm.value.name,
      this.courseForm.value.grade,
      this.courseForm.value.credits
    );

    let editPair = {
        "course" : this.course,
        "index" : this.editIndex
      };

    this.courseForm.reset();
    this.courseSubmitted.emit(editPair);
    this.onCancel();
  }

  onCancel() {
    this.haveEditForm = false;
    this.haveFormStatus.emit(this.haveEditForm);
  }
}
