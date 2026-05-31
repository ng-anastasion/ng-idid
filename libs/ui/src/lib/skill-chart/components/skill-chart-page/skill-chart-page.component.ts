import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

// 🚀 Заменяем HighchartsChartModule на HighchartsChartComponent
import * as Highcharts from 'highcharts'; // Надежный импорт самого ядра Highcharts
import { HighchartsChartComponent } from 'highcharts-angular';

// Простой интерфейс для входных данных (можешь вынести в shared модели)
export interface ChartSkillData {
  name: string;
  frequency: number; // Процент востребованности
}

@Component({
  selector: 'lib-skill-chart-page',
  imports: [CommonModule, HighchartsChartComponent],
  templateUrl: './skill-chart-page.html',
  styleUrl: './skill-chart-page.scss',
})
export class SkillChartPageComponent {
  // Нативный объект Highcharts для обертки
  readonly Highcharts: typeof Highcharts = Highcharts;

  // Signal Input: Принимает массив навыков для отображения
  readonly data = input.required<ChartSkillData[]>();
  
  // Signal Input: Заголовок графика (например, "Топ востребованных навыков")
  readonly title = input<string>('Востребованность технологий на рынке');

  // Computed: Автоматически пересчитывает опции графика при изменении данных
  readonly chartOptions = computed<Highcharts.Options>(() => {
    const rawData = this.data();

    return {
      chart: {
        type: 'bar', // Горизонтальный столбчатый график (идеально для рейтингов)
        backgroundColor: 'transparent',
        fontFamily: 'system-ui, sans-serif'
      },
      title: {
        text: this.title(),
        align: 'left',
        style: { fontSize: '16px', fontWeight: '700', color: '#0f172a' }
      },
      xAxis: {
        categories: rawData.map(item => item.name),
        crosshair: true,
        labels: { style: { color: '#475569', fontWeight: '600' } }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: { text: 'Частота встречи в вакансиях (%)', style: { color: '#64748b' } },
        labels: { format: '{value}%' }
      },
      tooltip: {
        valueSuffix: '%'
      },
      plotOptions: {
        bar: {
          borderRadius: 4, // Скругление столбиков в стиле Material/Modern UI
          dataLabels: {
            enabled: true,
            format: '{y}%',
            style: { fontWeight: 'bold', colors: '#1e293b' }
          }
        }
      },
      series: [{
        type: 'bar',
        name: 'Популярность',
        data: rawData.map(item => item.frequency),
        color: '#2563eb' // Красивый синий цвет (Blue 600) под стиль дашборда
      }],
      credits: { enabled: false } // Убираем водяной знак сайта highcharts
    };
  });
}