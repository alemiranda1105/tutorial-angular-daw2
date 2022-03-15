import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponentComponent implements OnInit {
  authorName = "Alejandro Miranda";
  link = "https://github.com/alemiranda1105/tutorial-angular-daw2";

  constructor() { }

  ngOnInit(): void {
  }

}
