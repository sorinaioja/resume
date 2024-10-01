import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  frontendSkills: Skill[] = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'TypeScript', level: 'Experienced' },
    { name: 'Angular Framework', level: 'Experienced' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'RxJs', level: 'Experienced' },
    { name: 'Responsive Design', level: 'Experienced' },
    { name: 'Version Control/Git', level: 'Experienced' },
  ];

  backendSkills: Skill[] = [
    { name: '.NET Core/ASP.NET Core', level: 'Experienced' },
    { name: '.NET Framework', level: 'Experienced' },
    { name: 'REST API Development', level: 'Experienced' },
    { name: 'OOP Concepts', level: 'Experienced' },
    { name: 'LINQ', level: 'Intermediate' },
    { name: 'Entity Framework', level: 'Experienced' },
    { name: 'Microsoft SQL Server', level: 'Experienced' },
    { name: 'Design patterns', level: 'Intermediate' },
  ];
}
