import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  email: string;
  checkoutForm;
    
  constructor(private formBuilder: FormBuilder,private router: Router) { 
    this.checkoutForm = this.formBuilder.group({
      email: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    // Process checkout data here
    this.email = data.email;
    this.checkoutForm.reset();
    this.router.navigate(['/consultar-servicio'], {queryParams: {email: this.email}});
    console.warn('Your order has been submitted', this.email);

  }

}
