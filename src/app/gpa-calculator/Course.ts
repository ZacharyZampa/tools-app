export class Course {
  private id: string;
  name: string;
  grade: number;
  private gradeLetter: string;
  credits: number;

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
    4: 'A',
    3.7: 'A-',
    3.3: 'B+',
    3: 'B',
    2.7: 'B-',
    2.3: 'C+',
    2: 'C',
    1.7: 'C-',
    1.3: 'D+',
    1: 'D',
    0: 'F'
  };

  constructor(id: string, name: string, grade: number, credits: number) {
    this.id = id;
    this.name = name;
    this.grade = grade;
    this.credits = credits;
    this.gradeLetter = this.toLetterGrade(this.grade);
  }

  toLetterGrade(grade: number): string {
    console.log('in converter: ' + grade);
    return this.gradeConversion[grade];
  }
}
