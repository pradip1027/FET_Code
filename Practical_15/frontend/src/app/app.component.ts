import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoryComponent } from './theory.component';
import { AuthComponent } from './auth.component';
import { CrudComponent } from './crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TheoryComponent, AuthComponent, CrudComponent],
  template: `
    <h1>Practical 15 - Angular & MongoDB</h1>
    
    <div>
      <button (click)="view = 'theory'">1. Theory</button>
      <button (click)="view = 'auth'">2. Auth System</button>
      <button (click)="view = 'crud'" [disabled]="!isLoggedIn">3. Student CRUD (Login Required)</button>
    </div>
    
    <hr>

    <div *ngIf="isLoggedIn">
      <p>Status: Logged in as {{ currentUser?.email }} | <button (click)="logout()">Logout</button></p>
    </div>

    <app-theory *ngIf="view === 'theory'"></app-theory>
    <app-auth *ngIf="view === 'auth' && !isLoggedIn" (onLoginSuccess)="handleLogin($event)"></app-auth>
    <app-crud *ngIf="view === 'crud' && isLoggedIn"></app-crud>
  `
})
export class AppComponent {
  view = 'theory';
  isLoggedIn = false;
  currentUser: any = null;

  handleLogin(user: any) {
    this.isLoggedIn = true;
    this.currentUser = user;
    this.view = 'crud';
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.view = 'auth';
  }
}
