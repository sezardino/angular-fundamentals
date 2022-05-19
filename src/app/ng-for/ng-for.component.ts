import { Component, OnInit } from '@angular/core';

interface Developer {
  name: string;
  position: string;
  experience: number;
  stack: string[];
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  developers: Developer[] = [
    {
      name: 'John Doe',
      experience: 2,
      position: 'Frontend',
      stack: ['Angular', 'TypeScript'],
    },
    {
      name: 'Jane Doe',
      experience: 5,
      position: 'Backend',
      stack: ['Node.js', 'Express'],
    },
    {
      name: 'Jack Doe',
      experience: 3,
      position: 'Fullstack',
      stack: ['Angular', 'Node.js', 'Express'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
