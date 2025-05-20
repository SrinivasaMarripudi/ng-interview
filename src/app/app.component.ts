import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-interview';

  firstName: string = 'Srinivasa Rao Marripudi';
  
  getFirstName(): string {
    return this.firstName;
  }
}
