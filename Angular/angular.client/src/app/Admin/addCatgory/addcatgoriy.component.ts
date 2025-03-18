import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-addcatgoriy',
  standalone: false,
  templateUrl: './addcatgoriy.component.html',
  styleUrl: './addcatgoriy.component.css'
})
export class AddcatgoriyComponent {

  constructor(private _ser: MyserviceService) { }


  ngOnInit() { }


  onSubmitData(data: any) {
    this._ser.addCategories(data).subscribe(() => {
      alert("add category")
    })
  }


}
