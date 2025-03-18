import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-productdetails',
  standalone: false,
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product: any;
  pId: number = 0;

  constructor(private service: MyserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.pId = Number(this.route.snapshot.paramMap.get("id")); // Convert to number
    this.service.getProductsByID(this.pId).subscribe(data => {
      this.product = data;
    });
  }
}
