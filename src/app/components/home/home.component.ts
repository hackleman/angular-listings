import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by zipcode" #filter>
        <button class="primary" type="button" >Search</button>
      </form>
    </section>
    <section class="results">
    </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor() {
  }
}