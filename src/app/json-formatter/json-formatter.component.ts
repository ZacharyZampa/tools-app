import { Component, ChangeDetectorRef } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent {
  inputValue: string = "";
  cleaned: string;
  isValid = true;

  constructor(private _router: Router,
              private changeDetectorRef: ChangeDetectorRef) {  }

  onInput(value: string) {
    this.inputValue = value;
    this.cleanJSON();
  }

  cleanJSON() {
    let json;
    try {
      json = JSON.parse(this.inputValue);
      this.isValid = true;
    } catch (error) {
      console.log("Cannot parse JSON");
      this.isValid = false;
    }


    this.changeDetectorRef.detectChanges();

    this.cleaned = JSON.stringify(json, null, 2);
  }
}
