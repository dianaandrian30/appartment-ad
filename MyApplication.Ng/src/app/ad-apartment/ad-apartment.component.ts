import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/primeng';

@Component({
  selector: 'app-ad-apartment',
  templateUrl: './ad-apartment.component.html',
  styleUrls: ['./ad-apartment.component.css']
})
export class AdApartmentComponent implements OnInit {

  items: MenuItem[];

  activeIndex = 0;

  displayAddressComponent = false;
  displayDetailsComponent = false;
  displayDescriptionComponent = false;
  displayContactDetailsComponent = false;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.items = [{

      label: 'Descriere',
      command: (event: any) => {
        this.activeIndex = 0;
        this.displayAddressComponent = false;
        this.displayContactDetailsComponent = false;
        this.displayDescriptionComponent = true;
        this.displayDetailsComponent = false;
        this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
      }
    },
    {
      label: 'Detalii Imobil',
      command: (event: any) => {
        this.activeIndex = 1;
        this.displayAddressComponent = false;
        this.displayContactDetailsComponent = false;
        this.displayDescriptionComponent = false;
        this.displayDetailsComponent = true;
        this.messageService.add({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
      }
    },
    {
      label: 'Detalii Contact',
      command: (event: any) => {
        this.activeIndex = 2;
        this.displayAddressComponent = false;
        this.displayContactDetailsComponent = true;
        this.displayDescriptionComponent = false;
        this.displayDetailsComponent = false;
        this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
      }
    }
    ];

    this.displayDescriptionComponent = true;
  }

  onNextItemToGo(event: number) {
    this.activeIndex = event;

    if (event === 0) {
      this.displayDescriptionComponent = true;
      this.displayAddressComponent = false;
      this.displayContactDetailsComponent = false;
      this.displayDetailsComponent = false;
    }

    if (event === 1) {
      this.displayDetailsComponent = true;
      this.displayAddressComponent = false;
      this.displayContactDetailsComponent = false;
      this.displayDescriptionComponent = false;
    }

    if (event === 2) {
      this.displayContactDetailsComponent = true;
      this.displayAddressComponent = false;
      this.displayDescriptionComponent = false;
      this.displayDetailsComponent = false;
    }
  }
}
