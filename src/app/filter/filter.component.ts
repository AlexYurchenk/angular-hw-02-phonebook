import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filter!: string;
  @Output() onFilterChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  onChange(e: Event) {
    this.onFilterChange.emit((<HTMLInputElement>e.target).value);
  }
  ngOnInit(): void {}
}
