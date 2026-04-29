import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'EduTech SPA';
  isLoggedIn = false;
  isLoginMode = true; 

  users: any[] = [];
  authData = { username: '', password: '' };
  authError = '';

  constructor(private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.authError = '';
  }

  onAuthSubmit() {
    if (!this.authData.username || !this.authData.password) {
      this.authError = "Please fill in all fields.";
      return;
    }

    if (this.isLoginMode) {
      const user = this.users.find(u => u.username === this.authData.username && u.password === this.authData.password);
      if (user) {
        this.isLoggedIn = true;
        this.authError = '';
        this.router.navigate(['/home']);
      } else {
        this.authError = "Invalid credentials. Please try again.";
      }
    } else {
      if (this.users.find(u => u.username === this.authData.username)) {
        this.authError = "Username already exists.";
        return;
      }
      this.users.push({ username: this.authData.username, password: this.authData.password });
      this.isLoginMode = true;
      this.authError = "Registration successful! Please sign in.";
      this.authData = { username: '', password: '' };
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.authData = { username: '', password: '' };
    this.router.navigate(['/']);
  }
}
