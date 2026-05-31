import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCE_KEYWORDS_LIST, MARKET_SKILLS_LIST } from '@ng-hire-up/interview-tools';
import { SkillChartPageComponent } from '@ng-hire-up/ui';

@Component({
  selector: 'lib-statistics-page',
  imports: [CommonModule, SkillChartPageComponent],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss',
})
export class StatisticsPage {
    // Вырезаем Топ-10 технологий
    readonly topSkills = MARKET_SKILLS_LIST.slice(0, 10);

    // Вырезаем Топ-10 ключевых слов опыта
    readonly topKeywords = EXPERIENCE_KEYWORDS_LIST.slice(0, 10);
}
