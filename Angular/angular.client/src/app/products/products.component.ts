import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private mys: MyserviceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getData();
  }


  products: any[] = []
  categoryId: any;
  getData() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    this.mys.getProducts(this.categoryId).subscribe((data) => {

      this.products = data
    })
  }
}
