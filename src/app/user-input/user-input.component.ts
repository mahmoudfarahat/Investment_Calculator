import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

   calculate = output<InvestmentInput>();
// @Output() calculate = new EventEmitter<{initialInvestment:number, duration:number,expectedReturn:number,  annualInvestment:number}>()

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpextedInvestment = signal('5');
 enteredDuration = signal('10');
  onSubmit(){
    this.calculate.emit({initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment:+this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpextedInvestment(),
      duration:+this.enteredDuration()})

      this.enteredInitialInvestment.set('0')
      this.enteredAnnualInvestment.set('0')
      this.enteredExpextedInvestment.set('5')
      this.enteredDuration.set('10')

  }


}
