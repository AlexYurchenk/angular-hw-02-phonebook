import { v4 as uuidv4 } from 'uuid';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from './../app.component';
export interface FormComponent {
  name: string;
  phone: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Contact> = new EventEmitter<Contact>();
  name = '';
  phone = '';
  onInputChange(e: Event) {
    this[(<HTMLInputElement>e.target).name as 'name' | 'phone'] = (<
      HTMLInputElement
    >e.target).value;
  }
  onSubmit(e: Event) {
    e.preventDefault();
    if (this.name.trim() === '' || this.phone.trim() === '') {
      alert('Please, fill in the form');
      return;
    }
    this.onAdd.emit({
      id: uuidv4(),
      name: this.name,
      phone: this.phone,
    });
    this.name = this.phone = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
