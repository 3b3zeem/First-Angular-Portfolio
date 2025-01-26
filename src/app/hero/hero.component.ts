import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  myFileName: string = 'AhmedMostafaAbdelazemCV.pdf';
  fileUrl: string = '../assets/AhmedMostafaAbdelazemCV.pdf';
}
