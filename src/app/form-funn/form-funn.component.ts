import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-funn',
  templateUrl: './form-funn.component.html',
  styleUrls: ['./form-funn.component.css'],

})
export class FormFunnComponent {

  constructor() { }
  firstName = new FormControl('');
  lastName = new FormControl('');
}
