import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  standalone: false,
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  product = {
    name: '',
    avatar: '',
    categoryId: 0
  };

  categories: any[] = [];
  pId: number = 0;

  constructor(private _ser: MyserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pId = Number(this.route.snapshot.paramMap.get("id"));
    this.getProduct();
    this.getCategories();
  }

  getCategories() {
    this._ser.getCategories().subscribe((d) => {
      this.categories = d;
    });
  }

  getProduct() {
    this._ser.getProductsByID(this.pId).subscribe((data) => {
      this.product = data;
    });
  }

  onSubmitData() {
    console.log("Submitting product:", this.product);
    this._ser.editProducts(this.pId, this.product).subscribe(() => {
      alert("Product updated successfully!");
    });
  }
}
