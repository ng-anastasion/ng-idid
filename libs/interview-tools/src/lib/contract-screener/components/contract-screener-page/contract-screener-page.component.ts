import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

import { CONTRACT_CRITERIA_REGISTRY } from '../../configs/contract-criteria.config';

interface ContractCriterionUiItem {
  id: string;
  name: string;
  severity: 'critical' | 'minor';
  status: 'success' | 'warning' | 'error';
  icon: string;
  text: string;
}

@Component({
  selector: 'lib-contract-screener-page',
  imports: [CommonModule],
  templateUrl: './contract-screener-page.component.html',
  styleUrl: './contract-screener-page.component.scss'
})
export class ContractScreenerPageComponent {
  // 1. Сигнал для отслеживания раскрытого аккордеона (null — все закрыты)
  readonly expandedCriterionId = signal<string | null>('salaryFormat');

  // 2. Симулируем результаты сканирования договора (какие пункты провалены)
  readonly scanResults = signal<Array<{ id: string; isValid: boolean }>>([
    { id: 'salaryFormat', isValid: false },      // critical -> error
    { id: 'probationPeriod', isValid: true },    // success
    { id: 'workSchedule', isValid: false },      // minor -> warning
    { id: 'overtimePay', isValid: false },       // critical -> error
    { id: 'ndaAndNca', isValid: true },          // success
    { id: 'intellectualProperty', isValid: true },// success
    { id: 'terminationTerms', isValid: false }   // minor -> warning
  ]);

  // 3. Вычисляем массив критериев для UI
  readonly contractCriteria = computed<ContractCriterionUiItem[]>(() => {
    const results = this.scanResults();

    return Object.values(CONTRACT_CRITERIA_REGISTRY).map(def => {
      const match = results.find(r => r.id === def.id);
      const isValid = match ? match.isValid : true;

      let status: 'success' | 'warning' | 'error' = 'success';
      let icon = 'check_circle'; // Иконки из Material Icons

      if (!isValid) {
        status = def.severity === 'critical' ? 'error' : 'warning';
        icon = def.severity === 'critical' ? 'cancel' : 'error';
      }

      return {
        id: def.id,
        name: def.name,
        severity: def.severity,
        status,
        icon,
        text: isValid ? def.textSuccess : def.textFail
      };
    });
  });

  // 4. Считаем индекс безопасности договора (Индекс = % успехов от критических пунктов)
  readonly safetyScore = computed(() => {
    const criteria = this.contractCriteria();
    const criticalItems = criteria.filter(c => c.severity === 'critical');
    const passedCritical = criticalItems.filter(c => c.status === 'success').length;

    const percentage = criticalItems.length > 0 
      ? Math.round((passedCritical / criticalItems.length) * 100) 
      : 100;

    let verdict = 'Безопасно к подписанию';
    let colorClass = 'safe';

    if (percentage < 50) {
      verdict = 'Крайне опасно! Подписывать нельзя';
      colorClass = 'danger';
    } else if (percentage < 100) {
      verdict = 'Требуются правки и согласование';
      colorClass = 'caution';
    }

    return { percentage, verdict, colorClass };
  });

  // 5. Переключение аккордеона
  toggleCriterion(id: string): void {
    this.expandedCriterionId.update(currentId => currentId === id ? null : id);
  }
}
