import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VALIDATION_REGEX_MAP, ValidationType } from '../constants/validation.utils';


@Component({
  selector: 'subsidios-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() type = 'text';
  @Input() label = '';
  @Input() placeholder = '';

  @Input() note = '';
  @Input() textSuccess = '';
  @Input() showStatus = true;

  @Input() showCounter = false;
  @Input() maxLength: number | null = null;
  @Input() minLength: number | null = null;

  @Input() max: number | null = null;
  @Input() min: number | null = null;

  @Input() disabled = false;
  @Input() required = false;
  // any | alphanumeric | alphabetic | numeric
  @Input() typeValidation: ValidationType = 'any' ;
  auxExpresionRegular: RegExp | null = null;
  @Input() showCurrencyFormat = false;
  @Input() isReadOnly = false;

  ngOnInit(): void {
    this.auxExpresionRegular = VALIDATION_REGEX_MAP[this.typeValidation] || null;
  }

  @HostListener('input', ['$event.target'])
  onNumberChange(target: EventTarget | null) {
    if (target instanceof HTMLInputElement) {
      let value = target.value.replace(/^0+(?:\.0+)*(?:\.)*(?=\d)/, '');
      if (this.maxLength !== null && value.length > this.maxLength) {
        value = value.toString().slice(0, this.maxLength);
      }
      this.control?.setValue(value);
    }
  }

  get isControlValid() {
    return this.control.touched && this.control.valid;
  }
  get isControlInvalid() {
    return this.control.touched && this.control.invalid;
  }
  onKey(event: any) {
    if (this.auxExpresionRegular !== null) {
      const auxValidate: string[] = [
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'Backspace',
        'Delete',
        'Tab',
      ];
      if (!auxValidate.includes(event.key)) {
        if (!this.auxExpresionRegular?.test(event.key)) return false;
        else return true;
      }
      return true;
    }
    return true;
  }
}
