import { InvestmentService } from './../investment.service';
import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

private investmentService = inject(InvestmentService);

// get results(){
//   return this.investmentService.resultsData;
// }
// results = computed(() => this.investmentService.resultsData())

results = this.investmentService.resultsData.asReadonly();

}
