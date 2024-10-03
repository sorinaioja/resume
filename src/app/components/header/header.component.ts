import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'angular-dark-theme';

  toggleTheme() {
    document.body.classList.toggle('light-theme');
    
  }
}
