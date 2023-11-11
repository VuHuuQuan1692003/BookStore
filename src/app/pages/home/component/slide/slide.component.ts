import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  slides = [
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2620_new.jpg?v=1&w=1580&h=400',
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2641_new.jpg?v=1&w=1580&h=400',
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2647_new.jpg?v=1&w=1580&h=400',
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2512_new.jpg?v=3&w=1580&h=400',
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2575_new.jpg?v=1&w=1580&h=400',
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
  };
}
