import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private _ser: MyserviceService) { }
  user: any;
  enableEdit: boolean = false;
  data: any
  ngOnInit() {
    this.data = sessionStorage.getItem('User');
    this.user = JSON.parse(this.data);
  }

  activeModel() {
    this.enableEdit = true;
  }

  UpdateProfile(data: any) {
    this.user = data;
    this._ser.editUser(this.user.id, this.user).subscribe(() => { })
    sessionStorage.setItem('User', this.user)
    this.enableEdit = false;
  }

}
