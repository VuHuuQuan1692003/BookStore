import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-top-product',
  templateUrl: './list-top-product.component.html',
  styleUrls: ['./list-top-product.component.css']
})
export class ListTopProductComponent {
  @Input() data: any
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}
