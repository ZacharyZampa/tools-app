export class Course {
  private _name: String;
  private _grade: number;
  private _gradeLetter: string;
  private _credits: number;

  // gradeConversion = new Map([
  //   [4, "A"],
  //   [3.7, "A-"],
  //   [3.3, "B+"],
  //   [3, "B"],
  //   [2.7, "B-"],
  //   [2.3, "C+"],
  //   [2, "C"],
  //   [1.7, "C-"],
  //   [1.3, "D+"],
  //   [1, "D"],
  //   [0, "F"]
  // ]);

  gradeConversion = {
    4: "A",
    3.7: "A-",
    3.3: "B+",
    3: "B",
    2.7: "B-",
    2.3: "C+",
    2: "C",
    1.7: "C-",
    1.3: "D+",
    1: "D",
    0: "F"
  };

  constructor(name: String, grade: number, credits: number) {
    this._name = name;
    this._grade = grade;
    this._credits = credits;
    this._gradeLetter = this.toLetterGrade(this.grade);
  }

  toLetterGrade(grade: number): string {
    console.log('in converter: ' + grade);
    return this.gradeConversion[grade];
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

  get gradeLetter(): string {
    return this._gradeLetter;
  }

  set gradeLetter(value: string) {
    this._gradeLetter = value;
  }

  get credits(): number {
    return this._credits;
  }

  set credits(value: number) {
    this._credits = value;
  }
}
