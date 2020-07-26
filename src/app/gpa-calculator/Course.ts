export class Course {
  private _name: String;
  private _grade: number;
  private _credits: number;

  constructor(name: String, grade: number, credits: number) {
    this._name = name;
    this._grade = grade;
    this._credits = credits;
  }


    get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get grade(): number {
    return this._grade;
  }

  set grade(value: number) {
    this._grade = value;
  }

  get credits(): number {
    return this._credits;
  }

  set credits(value: number) {
    this._credits = value;
  }
}
