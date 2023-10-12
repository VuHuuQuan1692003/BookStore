import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product!: any;
  isUpdated: number = 0;
  constructor(
    private productSevice: ProductService,
    private router: ActivatedRoute) {
    this.router.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productSevice.getOneProduct(id).subscribe(product => {
        this.product = product;
      })
    })
  }
}
