import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/product';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'nnp-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = error as any);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }


}
