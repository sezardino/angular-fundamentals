import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-binding',
  templateUrl: './forms-binding.component.html',
  styleUrls: ['./forms-binding.component.scss'],
})
export class FormsBindingComponent implements OnInit {
  inputValue = 'initial string';

  constructor() {}

  ngOnInit(): void {}
}
