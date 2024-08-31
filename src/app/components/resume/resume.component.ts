import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    HeaderComponent, 
    AboutComponent,
    ExperienceComponent,
    ContactComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  downloadCV(): void {

  }
}
