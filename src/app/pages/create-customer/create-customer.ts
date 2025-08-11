import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { Stepper } from "../../components/stepper/stepper";


@Component({
  selector: 'app-create-customer',
  imports: [
    NavBar,
    Stepper
],
  standalone: true,
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css'
})
export class CreateCustomer {

}
