import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private _ser: MyserviceService) { }


  ngOnInit() { }


  onSubmitData(data: any) {
    this._ser.addUser(data).subscribe(() => {
      alert(
        "add Users")

    })
  }
}
