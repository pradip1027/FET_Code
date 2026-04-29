import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="box">
      <h2>{{ isLogin ? 'Login' : 'Sign Up' }}</h2>
      <form (submit)="onSubmit($event)">
        <div *ngIf="!isLogin">
          <label>Name:</label>
          <input type="text" [(ngModel)]="user.name" name="name" required>
          <label>Contact Number:</label>
          <input type="text" [(ngModel)]="user.contact" name="contact" required>
        </div>
        
        <label>Email:</label>
        <input type="email" [(ngModel)]="user.email" name="email" required>
        
        <label>Password:</label>
        <input type="password" [(ngModel)]="user.password" name="password" required>
        
        <p *ngIf="message" style="color: red;">{{ message }}</p>
        
        <button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
        <button type="button" (click)="isLogin = !isLogin">
          Switch to {{ isLogin ? 'Sign Up' : 'Login' }}
        </button>
      </form>
    </div>
  `
})
export class AuthComponent {
  @Output() onLoginSuccess = new EventEmitter<any>();
  isLogin = true;
  user = { name: '', email: '', contact: '', password: '' };
  message = '';

  constructor(private authService: AuthService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.message = '';

    if (this.isLogin) {
      this.authService.login(this.user).subscribe({
        next: (res) => this.onLoginSuccess.emit(res.user),
        error: (err) => this.message = err.error.message || 'Login failed'
      });
    } else {
      this.authService.signup(this.user).subscribe({
        next: (res) => {
          alert('Registered successfully!');
          this.isLogin = true;
        },
        error: (err) => this.message = err.error.message || 'Signup failed'
      });
    }
  }
}
