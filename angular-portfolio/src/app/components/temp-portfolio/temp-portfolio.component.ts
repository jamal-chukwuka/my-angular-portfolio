import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-temp-portfolio',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './temp-portfolio.component.html',
  styleUrl: './temp-portfolio.component.scss'
})
export class TempPortfolioComponent {
    cards = [
      {
        title: 'Currently Learning',
        description: 'Exploring advanced Angular and full-stack architecture'
      },
        {
        title: 'Building in Public',
        description: 'Working on a Portfolio that toggles between React and Angular.'
      },
        {
        title: 'Writing',
        description: 'Drafting essays on engineering and creativity at dev.to'
      },

    ]
}
