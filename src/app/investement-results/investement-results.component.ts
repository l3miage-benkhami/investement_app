import { Component, Input } from "@angular/core";

@Component({
  selector: "app-investement-results",
  standalone: true,
  imports: [],
  templateUrl: "./investement-results.component.html",
  styleUrl: "./investement-results.component.css",
})
export class InvestementResultsComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
