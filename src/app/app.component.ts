import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


const numberIsValid = (control) => {
  let num = parseFloat(control.value);
  if (typeof num != 'number') {
    return { num: "not number" };
  }

  if (Math.floor(num) != num) {
    return { num: "not whole number" };
  }
  if (num <= 1) {
    return { num: "less than one" }
  }
  return null;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  prime = new FormControl({value: 991, disabled: false}, [Validators.required, numberIsValid]);
  primeInvalid = false;
  generator = new FormControl({value: 7, disabled: false}, [Validators.required, numberIsValid]);
  generatorInvalid = false;
  current = null;
  _begun = false;
  cycleCount: number;
  intervalId;
  disapproval = false;

  get begun() { return this._begun; }

  set begun(condition: boolean) {
    let command = condition ? 'disable' : 'enable';
    this.prime[command]();
    this._begun = condition;
  }

  start() {
    if(this.generator.invalid || this.prime.invalid) {
      this.begun = false;
      return;
    }

    let generator = parseFloat(this.generator.value);
    let prime = parseFloat(this.prime.value);

    this.begun = true;
    this.current = generator;
    this.cycleCount = 1;
    this.disapproval = false;
    this.intervalId = setInterval(() => {
      this.current = (this.current * generator) % prime;
      this.cycleCount += 1;

      if(this.current == generator || this.cycleCount > prime) {
        this.begun = false;
        clearInterval(this.intervalId);
        if(this.cycleCount != prime) {
          this.disapproval = true;
        }
      }
    }, 800);


  }
}
