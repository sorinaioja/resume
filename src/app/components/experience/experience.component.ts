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
    { name: 'SASS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'Material UI', level: 'Intermediate' }
  ];

  backendSkills: Skill[] = [
    { name: 'PostgreSQL', level: 'Basic' },
    { name: 'Node JS', level: 'Intermediate' },
    { name: 'Express JS', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' }
  ];
}
