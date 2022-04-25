import { Component } from '@angular/core';
export interface Contact {
  id: string;
  name: string;
  phone: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contacts: Contact[] = [];
  filter = '';
  updateContacts(c: Contact) {
    if (this.contacts.some((e) => e.name === c.name)) {
      return alert(`${c.name} is already in phone book`);
    }
    this.contacts = [c, ...this.contacts];
  }
  updateFilter(s: string) {
    this.filter = s;
  }
  filterContacts() {
    return this.contacts.filter((e) => e.name.includes(this.filter));
  }
  deleteContact(id: string) {
    this.contacts = this.contacts.filter((e) => e.id !== id);
    console.log(this.contacts);
  }
}
