import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private _ser: MyserviceService) { }


  ngOnInit() {
    this.getCategories()
  }

  categories: any[] = []
  getCategories() {
    this._ser.getCategories().subscribe((d) => {
      this.categories = d;
    })
  }
  onSubmitData(data: any) {
    this._ser.addProducts(data).subscribe(() => {
      alert("add product")

    })
  }
}
