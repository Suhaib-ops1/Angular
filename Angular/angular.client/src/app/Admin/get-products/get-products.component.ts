import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-get-products',
  standalone: false,
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css'
})
export class GetProductsComponent {

  constructor(private mys: MyserviceService) { }

  ngOnInit() {

    this.getData();
  }


  products: any[] = []
  getData() {

    this.mys.getProducts().subscribe((data) => {

      this.products = data;
    })
  }
}
