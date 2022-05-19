import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit {
  name = 'John';
  position = 'Frontend Developer';
  level = 'Mid';
  experience = '2 years';

  constructor() {}

  ngOnInit(): void {}
}
