import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  AfterViewInit,
  SimpleChanges,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'subsidios-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css'],
})
export class DropdownListComponent implements OnInit, AfterViewInit {
  @Input() lista!: any[];
  @Input() labelText = '';
  @Input() idList = '';
  @Input() type = '';
  @Input() update = false;
  @Input() disabled = false;
  @Input() isClear = false;
  @Input() value = '';
  @Input() note = '';
  @Input() isRequired = false;
  @Input() isValid = false;
  @Input() isNotValid = false;
  @Input() isTouched = false;
  @Input() title = 'Escoger';
  @Output() eventlist = new EventEmitter<any>();

  @HostListener('click')
  clicked() {
    this.inside = true;
  }

  @HostListener('document:click')
  clickedOut() {
    if (!this.inside) {
      this.seelist = false;
    }
    this.inside = false;
  }

  filter = false;
  basic = false;
  multiple = false;
  seelist: boolean = false;
  inside: boolean = false;
  selectOption: string = 'desplegable-selected-option';
  selectOptionRequired: string =
    'desplegable-selected-option error-desplegable-govco';
  selectOptionSuccess: string = 'desplegable-selected-option border-success';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTipo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isClear']?.currentValue) {
      this.title = 'Escoger';
    }
  }

  ngAfterViewInit(): void {
    this.addEventListeners();
  }

  private addEventListeners(): void {
    if (this.basic) {
      const varAux = 'lista-desplegables' + this.idList;
      let sel = document.getElementById(varAux);
      sel?.addEventListener('click', (e) => {
        this.getVal(e);
      });
    }
    if (this.filter) {
      const varAux = 'lista-filtro-busqueda' + this.idList;
      let sel = document.getElementById(varAux);
      sel?.addEventListener('click', (e) => {
        this.getVal(e);
      });
    }
    if (this.multiple) {
      const varAux = 'lista-check' + this.idList;
      let sel = document.getElementById(varAux);
      sel?.addEventListener('click', (e) => {
        this.getVal(e);
      });
    }
  }

  getVal(e: any): void {
    this.update = false;
    this.title = e.text;
    this.seelist = false;
    this.isRequired = false;
    this.eventlist.emit(e);
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  getTipo(): void {
    if (this.type === 'filter') {
      this.filter = true;
    }
    if (this.type === 'basic') {
      this.basic = true;
    }
    if (this.type === 'multiple') {
      this.multiple = true;
    }
  }

  seeList(): void {
    this.isTouched = true;
    this.seelist = !this.seelist;
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }
}
