import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  standalone: false,
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {

  @Input() User: any;
  @Output() UpdateData = new EventEmitter<any>()

  saveChange(data: any) {
    return this.UpdateData.emit(data);
  }
}
