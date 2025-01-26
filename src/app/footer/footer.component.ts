import { Component } from '@angular/core';

@Component({
  selector: 'app-footer', // ده الي هيتحط ف ال  app component.html
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email : string = 'ahmedmostafaabdel3azem@gmail.com'
}
