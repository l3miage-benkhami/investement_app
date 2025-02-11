import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvestementInput } from "../investement-input.model";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  @Output() calculateEvent = new EventEmitter<InvestementInput>();
  initialInvestement = "0";
  annualInvestement = "0";
  expectedReturn = "0";
  duration = "0";
  onSubmit() {
    this.calculateEvent.emit({
      initialInvestment: +this.initialInvestement,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestement,
      duration: +this.duration,
    });
  }
}
