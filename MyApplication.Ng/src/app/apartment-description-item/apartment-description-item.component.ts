import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Globals } from '../globals';

@Component({
  selector: 'app-apartment-description-item',
  templateUrl: './apartment-description-item.component.html',
  styleUrls: ['./apartment-description-item.component.css']
})
export class ApartmentDescriptionItemComponent implements OnInit {
  @Input() activeIndex: number;
  @Output() itemToGo: EventEmitter<number> = new EventEmitter<number>();

  currencyOptions: SelectItem[] = [];
  uploadedFiles: any[] = [];
  itemForm: FormGroup;
  img: any[] = [];
  titleCharsLeft = 150;
  descriptionCharsLeft = 500;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private globals: Globals
  ) { }

  ngOnInit() {
    this.currencyOptions = [
      { label: 'RON', value: 'RON' },
      { label: 'EURO', value: 'EURO' }
    ];

    this.itemForm = this.fb.group({
      'title': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(150)])),
      'description': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(500)])),
      // tslint:disable-next-line: max-line-length
      'price': new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.pattern('[1-9][0-9]*([\.,][0-9]+)?')])),
      'currency': new FormControl('', Validators.required),
      'images': new FormControl('', Validators.required),
      'county': new FormControl('', Validators.required),
      'locality': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required)
    });

    if (this.globals.getStep1Form()) {
      this.itemForm = this.globals.getStep1Form();
      this.onDescriptionChanged();
      this.onTitleChanged();
    }

    if (this.globals.getImages()) {
      this.img = this.globals.getImages();
    }
  }

  uploadFile(res: any, something: any, event) {
    for (let index = 0; index < something.length; index++) {
      this.onFileChange(something[index]);
    }
    something = [];
  }

  onFileChange(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.img.push(e.target.result);
    };
    reader.readAsDataURL(file);

    this.itemForm.get('images').setValue(this.img);
  }


  onTitleChanged() {
    const title = this.itemForm.get('title').value;
    const currentlength = title.length;
    this.titleCharsLeft = 150 - currentlength;

    if (this.titleCharsLeft < 0) {
      this.showError('Ati depasit numarul de caractere corespunzatoare titlului!');
    }
  }

  onDescriptionChanged() {
    const description = this.itemForm.get('description').value;
    const currentlength = description.length;
    this.descriptionCharsLeft = 500 - currentlength;

    if (this.descriptionCharsLeft < 0) {
      this.showError('Ati depasit numarul de caractere corespunzatoare descrierii!');
    }
  }

  pageChanged() {

    if (this.itemForm.status === 'VALID' && this.img.length > 1) {
      this.globals.setImgs(this.img);
      this.globals.setStep1Form(this.itemForm);
      this.itemToGo.emit(this.activeIndex + 1);
    } else {
      this.showError('Pasul curent nu este valid!');
    }
  }

  showError(msg: string) {
    this.messageService.add({ severity: 'error', summary: 'Service Message', detail: msg });
  }
}
