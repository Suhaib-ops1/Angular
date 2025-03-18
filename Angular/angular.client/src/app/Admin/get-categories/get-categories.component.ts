import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-get-categories',
  standalone: false,
  templateUrl: './get-categories.component.html',
  styleUrl: './get-categories.component.css'
})
export class GetCategoriesComponent {

  constructor(private service: MyserviceService) { }

  ngOnInit() {
    this.getData();
  }

  data: any[] = []
  getData() {
    this.service.getCategories().subscribe(d => {
      this.data = d
    })
  }
}
