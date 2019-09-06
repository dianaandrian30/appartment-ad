import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-gallery',
  templateUrl: './display-gallery.component.html',
  styleUrls: ['./display-gallery.component.css']
})
export class DisplayGalleryComponent implements OnInit {
  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: '../assets/25.jpg' });
    this.images.push({ source: '../assets/26.jpg' });
    this.images.push({ source: '../assets/27.jpg' });
    this.images.push({ source: '../assets/28.jpg' });
  }
}
