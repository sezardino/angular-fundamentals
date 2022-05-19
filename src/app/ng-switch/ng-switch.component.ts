import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss'],
})
export class NgSwitchComponent implements OnInit {
  isActive: string | boolean = false;

  constructor() {}

  ngOnInit(): void {}

  clickHandler() {
    if (this.isActive === false) {
      this.isActive = true;
      return;
    }

    if (this.isActive === true) {
      this.isActive = '';
      return;
    }

    if (typeof this.isActive === 'string') {
      this.isActive = false;
      return;
    }
  }
}
