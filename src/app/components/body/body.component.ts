import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }
}
