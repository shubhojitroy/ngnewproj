import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/product';
import { ConvertToSpacesPipe } from '../../shared/pipe/convert-to-spaces.pipe';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'nnp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  pageTitle = 'Product Detail';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  _listFilter = '';
  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = error as any
    );

  }

}
