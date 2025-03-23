import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  standalone: false,
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {

  category: { name: string, img: string } = { name: '', img: '' };

  id: any
  cat: any


  constructor(private _ser: MyserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');


    this._ser.getCategoryById(this.id).subscribe((data: any) => {
      this.category = data;

    });
  }

  onSubmitData(data: any) {
    this._ser.editCategory(this.id, data).subscribe(() => {
      alert("edited category")
    })
  }
}
