import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    HeaderComponent, 
    AboutComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  downloadCV(): void {

  }
}
