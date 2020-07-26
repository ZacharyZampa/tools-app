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
  @Output() haveFormStatus = new EventEmitter();

  courseForm: FormGroup;
  course: Course;

  gradeChoices = {
    "A" : 4.0,
    "A-" : 3.7,
    "B+" : 3.3,
    "B" : 3.0,
    "B-" : 2.7,
    "C+" : 2.3,
    "C" : 2.0,
    "C-" : 1.7,
    "D+" : 1.3,
    "D" : 1.0,
    "F" : 0.0,
    };

  constructor() { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'grade': new FormControl(null, Validators.required),
      'credits': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.course = new Course(this.courseForm.value.name, this.courseForm.value.grade, this.courseForm.value.credits);
    console.log(this.course);
    this.courseForm.reset();
    this.onCancel();
  }

  onCancel() {
    this.haveEditForm = false;
    this.haveFormStatus.emit(this.haveEditForm);
  }
}
