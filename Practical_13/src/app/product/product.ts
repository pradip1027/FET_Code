import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  productId: string | null = null;
  productDetails: any = null;

  // Mock DB
  allProducts = [
    { id: '101', name: 'Angular for Beginners', price: '$49.99', image: 'https://placehold.co/800x400/4f46e5/white?text=Angular', desc: 'Master the basics of Angular 17+ and build your first SPA.', details: 'This comprehensive course covers everything from components and services to routing and forms in the latest version of Angular.' },
    { id: '102', name: 'Advanced React Patterns', price: '$79.99', image: 'https://placehold.co/800x400/0ea5e9/white?text=React', desc: 'Take your React skills to the next level with advanced design patterns.', details: 'Learn Render Props, HOCs, Custom Hooks, and state management techniques used by industry professionals.' },
    { id: '103', name: 'Vue 3 Composition API', price: '$39.99', image: 'https://placehold.co/800x400/10b981/white?text=Vue', desc: 'Learn the modern way to write Vue applications.', details: 'Understand reactivity, setup scripts, and how to elegantly share logic across Vue components.' },
    { id: '104', name: 'Node.js Masterclass', price: '$89.99', image: 'https://placehold.co/800x400/22c55e/white?text=Node', desc: 'Build scalable backend architectures with Node.js and Express.', details: 'Includes REST APIs, MongoDB integration, Authentication with JWT, and deployment strategies.' },
    { id: '105', name: 'Python for Data Science', price: '$99.99', image: 'https://placehold.co/800x400/f59e0b/white?text=Python', desc: 'Data analysis, visualization, and machine learning with Python.', details: 'A deep dive into Pandas, NumPy, Matplotlib, and Scikit-Learn for aspiring data scientists.' },
    { id: '106', name: 'UI/UX Design Principles', price: '$29.99', image: 'https://placehold.co/800x400/ec4899/white?text=UI/UX', desc: 'Create stunning user interfaces and amazing user experiences.', details: 'Learn color theory, typography, user flows, wireframing, and high-fidelity prototyping.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.productDetails = this.allProducts.find(p => p.id === this.productId);
    });
  }
}
