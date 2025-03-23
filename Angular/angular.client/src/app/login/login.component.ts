import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service: MyserviceService, private _route: Router) { }

  ngOnit() { }

  users: any
  logeduser:any
  getData(enterUser: any) {
    this.service.getAllUsers().subscribe((data: any) => {
      this.users = data.find((p: any) => p.Email == enterUser.Email && p.password == enterUser.password);
      if (this.users) {
        alert("login successfully")
        this.logeduser = JSON.stringify(this.users);
        sessionStorage.setItem('User', this.logeduser)
        this._route.navigate(["/Categories"])
      } else {
        alert("Invalide email or password ")

      }
    })
  }

}
