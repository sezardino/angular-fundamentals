import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput') titleInput: ElementRef<HTMLInputElement>;
  @ViewChild('titleInput') textInput: ElementRef<HTMLInputElement>;

  title = '';
  text = '';

  constructor() {}

  ngOnInit(): void {}

  submitHandler() {
    if (!this.title.trim()) {
      this.titleInput.nativeElement.focus();

      return;
    }

    if (!this.text.trim()) {
      this.textInput.nativeElement.focus();
      return;
    }

    const newPost: Post = {
      title: this.title,
      text: this.text,
      id: Date.now(),
    };

    this.onAddPost.emit(newPost);
  }
}
