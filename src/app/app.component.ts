import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Post 1',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, itaque.',
      id: 1,
    },
    {
      title: 'Post 2',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est excepturi animi incidunt! Reiciendis, suscipit aliquid?',
      id: 2,
    },
    {
      title: 'Post 3',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      id: 3,
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.posts[0] = {
        title: 'change',
        text: 'change',
        id: 1,
      };
    }, 5000);
  }

  addPostHandler(post: Post) {
    this.posts.unshift(post);
  }
}
