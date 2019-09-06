import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Globals } from '../globals';

@Component({
  selector: 'app-apartment-details-item',
  templateUrl: './apartment-details-item.component.html',
  styleUrls: ['./apartment-details-item.component.css']
})
export class ApartmentDetailsItemComponent implements OnInit {
  @Input() activeIndex: number;
  @Output() itemToGo: EventEmitter<number> = new EventEmitter<number>();

  typeOfApartmentOptions: SelectItem[] = [];
  resfeaturesOptions: SelectItem[] = [];
  confortOptions: SelectItem[] = [];
  itemForm: FormGroup;
  images: any[];

  constructor(
    private fb: FormBuilder,
    private globals: Globals,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.typeOfApartmentOptions = [
      { label: 'Garsoniera', value: 'Garsoniera' },
      { label: '1 camera', value: '1 camera' },
      { label: '2 camere', value: '2 camere' },
      { label: '3 camere', value: '3 camere' },
      { label: '4 camere', value: '4 camere' },
      { label: '5 camere', value: '5 camere' },
      { label: '6 camere', value: '6 camere' }
    ];

    this.resfeaturesOptions = [
      { label: 'Circular', value: 'Circular' },
      { label: 'Decomandat', value: 'Decomandat' },
      { label: 'Semidecomandat', value: 'Semidecomandat' },
      { label: 'Nedecomandat', value: 'Nedecomandat' }
    ];

    this.confortOptions = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: 'Lux', value: 'Lux' }
    ];

    this.itemForm = this.fb.group({
      'nrOfRooms': new FormControl('', Validators.required),
      'resfeatures': new FormControl('', Validators.required),
      'confort': new FormControl('', Validators.required),
      // tslint:disable-next-line: max-line-length
      'surface': new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.pattern('[1-9][0-9]*([\.,][0-9]+)?')])),
      // tslint:disable-next-line: max-line-length
      'yearofbuilding': new FormControl('', Validators.compose([Validators.required, Validators.min(1800), Validators.pattern('[1-9][0-9]*')])),
      'nrOfBathrooms': new FormControl('', Validators.pattern('[1-9][0-9]*')),
      'levelno': new FormControl('', Validators.pattern('[1-9][0-9]*')),
      'parking': new FormControl('', Validators.pattern('[0-9]*')),
      'code': new FormControl(''),
    });

    this.images = [];
    this.images.push({ source: '../assets/30.jpg' });
    this.images.push({ source: '../assets/33.jpg' });
    this.images.push({ source: '../assets/34.jpg' });
    this.images.push({ source: '../assets/35.jpg' });


    if (this.globals.getStep2Form()) {
      this.itemForm = this.globals.getStep2Form();
    }
  }

  goBack() {
    this.globals.setStep2Form(this.itemForm);
    this.itemToGo.emit(this.activeIndex - 1);
  }

  nextItem() {
    if (this.itemForm.status === 'VALID') {
      this.globals.setStep2Form(this.itemForm);
      this.itemToGo.emit(this.activeIndex + 1);
    } else {
      this.showError('Pasul curent nu este valid!');
    }
  }

  showError(msg: string) {
    this.messageService.add({ severity: 'error', summary: 'Service Message', detail: msg });
  }
}
