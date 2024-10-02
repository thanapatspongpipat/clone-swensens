import { Component } from '@angular/core';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
  quartData: any = null;
  mQuartData: any = null;
  cakeData: any = null;
  barData: any = null;
  filterData: any;
  filterType: any = '';

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    if (this.filterType) {
      this.getAllProductData(this.filterType);
    } else {
      this.getAllProductData();
    }
  }

  getAllProductData(type?: string): any {
    this._apiService.getProductData(type).subscribe(
      (res) => {
        this.quartData = [];
        this.mQuartData = [];
        this.cakeData = [];
        this.barData = [];

        res.products.forEach((product: any) => {
          console.log(product);
          if (product.typeProduct === 1) {
            this.quartData.push(product); // Add the product to the corresponding array
          } else if (product.typeProduct === 2) {
            this.mQuartData.push(product);
          } else if (product.typeProduct === 3) {
            this.cakeData.push(product);
          } else if (product.typeProduct === 4) {
            this.barData.push(product);
          }
        });

        console.log(res.products);
      },
      (error) => {
        console.error('Error fetching product data:', error);
        this.quartData = [];
        this.mQuartData = [];
        this.cakeData = [];
        this.barData = [];
      }
    );
  }

  setFilter(type?: string): any {
    this.filterType = type;
    this.getAllProductData(type);
  }
}
