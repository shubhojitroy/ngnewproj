import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/product';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService
              ) {

              }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = error as any);
  }

  onBack() {
    this.router.navigate(['/products']);
  }


}
