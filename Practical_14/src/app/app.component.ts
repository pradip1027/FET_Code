import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Problem1Component } from './problem1.component';
import { Problem2Component } from './problem2.component';
import { Problem3Component } from './problem3.component';
import { Problem4Component } from './problem4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    Problem1Component, 
    Problem2Component, 
    Problem3Component, 
    Problem4Component
  ],
  template: `
    <div class="container">
      <header>
        <h1>Practical 14: Observables, Promises, Services & DI</h1>
        <p class="subtitle">Angular 19 Application</p>
      </header>

      <nav class="tabs">
        <button 
          [class.active]="activeTab === 1" 
          (click)="activeTab = 1">
          Problem 1 (Observables)
        </button>
        <button 
          [class.active]="activeTab === 2" 
          (click)="activeTab = 2">
          Problem 2 (Operators & Promises)
        </button>
        <button 
          [class.active]="activeTab === 3" 
          (click)="activeTab = 3">
          Problem 3 (Real Life RxJS)
        </button>
        <button 
          [class.active]="activeTab === 4" 
          (click)="activeTab = 4">
          Problem 4 (Services & DI)
        </button>
      </nav>

      <main class="content-area">
        <app-problem1 *ngIf="activeTab === 1"></app-problem1>
        <app-problem2 *ngIf="activeTab === 2"></app-problem2>
        <app-problem3 *ngIf="activeTab === 3"></app-problem3>
        <app-problem4 *ngIf="activeTab === 4"></app-problem4>
      </main>
    </div>
  `,
  styles: [`
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; background-color: #f4f7f6; color: #333; }
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
    header { text-align: center; margin-bottom: 30px; }
    h1 { color: #2c3e50; margin-bottom: 5px; }
    .subtitle { color: #7f8c8d; font-size: 1.1em; }
    
    .tabs { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; }
    .tabs button {
      background: none;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      color: #666;
      font-weight: bold;
      border-radius: 4px 4px 0 0;
      transition: all 0.3s ease;
    }
    .tabs button:hover { background-color: #e9ecef; }
    .tabs button.active {
      color: #007bff;
      border-bottom: 3px solid #007bff;
      background-color: #f8f9fa;
    }

    .content-area {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      min-height: 500px;
    }
  `]
})
export class AppComponent {
  activeTab = 1;
}
