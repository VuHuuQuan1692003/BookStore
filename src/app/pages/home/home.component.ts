import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];
  reversedProducts: any[] = [];
  topReadProducts: any[] = [];
  constructor(private productSevice: ProductService) {
    this.productSevice.getAllProduct().subscribe(data => {
      this.products = data;
      this.reversedProducts = this.products.slice(-10).reverse();
      this.topReadProducts = this.products.slice(7, 19).reverse();
      console.log(this.reversedProducts);

    }, error => console.log(error))
  }

}
