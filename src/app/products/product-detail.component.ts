import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
    'productId': id,
    'productName': 'Leaf Rake',
    'productCode': 'GDN-0011',
    'releaseDate': 'March 19, 2016',
    'description': 'Leaf rake with 48-inch wooden handle.',
    'price': 19.95,
    'starRating': 3.2,
    'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
