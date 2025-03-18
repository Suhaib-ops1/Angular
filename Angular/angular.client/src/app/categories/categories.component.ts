import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  constructor(private _ser : MyserviceService) { }

  ngOnInit() {
    this.getCategory()
  }
  CatgeoryData : any
  getCategory() {
    this._ser.getCategories().subscribe((data) => {
      this.CatgeoryData = data
    })

  }

}
