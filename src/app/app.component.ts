import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
    // resultsData? :{
    //   year: number,
    //   interest: number,
    //   valueEndOfYear: number,
    //   annualInvestment: number,
    //   totalInterest: number,
    //   totalAmountInvested:number
    // }[]




}
