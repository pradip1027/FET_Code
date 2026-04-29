import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products = [
    { id: '101', name: 'Angular for Beginners', price: '$49.99', image: 'https://placehold.co/400x200/4f46e5/white?text=Angular', desc: 'Master the basics of Angular 17+ and build your first SPA.' },
    { id: '102', name: 'Advanced React Patterns', price: '$79.99', image: 'https://placehold.co/400x200/0ea5e9/white?text=React', desc: 'Take your React skills to the next level with advanced design patterns.' },
    { id: '103', name: 'Vue 3 Composition API', price: '$39.99', image: 'https://placehold.co/400x200/10b981/white?text=Vue', desc: 'Learn the modern way to write Vue applications.' },
    { id: '104', name: 'Node.js Masterclass', price: '$89.99', image: 'https://placehold.co/400x200/22c55e/white?text=Node', desc: 'Build scalable backend architectures with Node.js and Express.' },
    { id: '105', name: 'Python for Data Science', price: '$99.99', image: 'https://placehold.co/400x200/f59e0b/white?text=Python', desc: 'Data analysis, visualization, and machine learning with Python.' },
    { id: '106', name: 'UI/UX Design Principles', price: '$29.99', image: 'https://placehold.co/400x200/ec4899/white?text=UI/UX', desc: 'Create stunning user interfaces and amazing user experiences.' }
  ];
}
