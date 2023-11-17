import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-slice-item-product',
  templateUrl: './slice-item-product.component.html',
  styleUrls: ['./slice-item-product.component.css']
})

export class SliceItemProductComponent {
  @Input() listProduct: any;

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: "false",
    draggable: false,
    "autoplay": true,
    "autoplaySpeed": 3000,
  };
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSlideConfig();
  }

  ngOnInit() {
    this.updateSlideConfig();
  }

  updateSlideConfig() {
    if (window.innerWidth < 640) { // For tablet and below
      this.slideConfig.slidesToShow = 2;
      this.slideConfig.draggable = true;
    }
    else if (window.innerWidth < 1024) {
      this.slideConfig.slidesToShow = 3;
      this.slideConfig.draggable = true;
    }
    else {
      this.slideConfig.slidesToShow = 6;
      this.slideConfig.draggable = false;
    }
  }

}
