import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  // RouterModule.forRoot([...])
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private _fb:FormBuilder,
    private  router: Router,
) {

  }
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this._fb.group({
      userName: [''],
      password: [''],
    });
  }
  authenticate(): void {
    const userName = this.form.value.userName;
    const password = this.form.value.password;
    // const user = this.allUsers.find(u => u.userName === userName && u.password === password);
    if (userName === 'admin' && password === '1234') {
      localStorage.setItem('user', 'admin');
      localStorage.setItem('password','1234');
      console.log(localStorage);
      this.router.navigateByUrl('dashboard');
      // window.location.reload();
    } else {
      console.log('Invalid username or password');
    }
  }
  logout(): void{
    localStorage.clear();
  }
}