import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StringCalculationService } from './services/string-calculation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
  inputString: string = '';
  result: number | null = null;
  errorMessage: string = '';

  constructor(private stringCalculatorService: StringCalculationService) {}

  calculate(): void {
    try {
      this.result = this.stringCalculatorService.add(this.inputString);
      this.errorMessage = '';
    } catch (error:any) {
      this.result = null;
      this.errorMessage = error.message;
    }
  }
}

