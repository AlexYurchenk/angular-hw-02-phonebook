import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Output() onContactDelete: EventEmitter<string> = new EventEmitter<string>();
  @Input() contact!: Contact;
  constructor() {}
  onDelete(id: string) {
    this.onContactDelete.emit(id);
  }
  ngOnInit(): void {}
}
