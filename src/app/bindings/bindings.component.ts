import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss'],
})
export class BindingsComponent implements OnInit {
  inputValue = '';

  constructor() {}

  ngOnInit(): void {}

  clickHandler(evt: MouseEvent) {
    console.log(evt);
  }

  inputHandler(evt: Event) {
    this.inputValue = (evt.target as HTMLInputElement).value;
  }
}
