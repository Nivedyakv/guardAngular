import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  public formsubmission = false;

  username: string = '';
  contact: any;

  submit(username: string, contact: any) {
    if(this.username || this.contact){
      alert('Submitted Successfully')
      this.formsubmission = true; 
      this.username='';
      this.contact='';
    }else{
      alert('Fill form Completely')
    }
  
  }

  canExit(): boolean {
    if (this.username || this.contact) {
      return confirm('Your data unsaved changes. Do you want to navigate away?');
    } else {
      return true;
    }
  }


}
