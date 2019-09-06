import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Globals } from '../globals';

@Component({
  selector: 'app-contact-details-item',
  templateUrl: './contact-details-item.component.html',
  styleUrls: ['./contact-details-item.component.css']
})
export class ContactDetailsItemComponent implements OnInit {
  @Input() activeIndex: number;
  @Output() itemToGo: EventEmitter<number> = new EventEmitter<number>();

  legalEntityOptions: SelectItem[] = [];
  itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private globals: Globals,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.legalEntityOptions = [
      { label: 'Persoana Fizica', value: 'Persoana Fizica' },
      { label: 'Persoana Juridica', value: 'Persoana Juridica' }
    ];

    this.itemForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'legalEntity': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'telephone': new FormControl('', Validators.required)
    });

    if (this.globals.getStep3Form()) {
      this.itemForm = this.globals.getStep3Form();
    }
  }

  goBack() {
    this.globals.setStep3Form(this.itemForm);
    this.itemToGo.emit(this.activeIndex - 1);
  }

  add() {
    if (this.itemForm.status === 'INVALID') {
      this.showError('Pasul curent nu este valid!');
    }
  }

  showError(msg: string) {
    this.messageService.add({ severity: 'error', summary: 'Service Message', detail: msg });
  }
}
