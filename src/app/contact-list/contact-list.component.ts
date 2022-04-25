import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../app.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Output() onContactDelete: EventEmitter<string> = new EventEmitter<string>();
  @Input() contacts!: Contact[];
  constructor() {}
  ngOnInit(): void {}
}
