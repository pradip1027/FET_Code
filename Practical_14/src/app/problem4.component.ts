import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { CartComponent } from './cart.component';

@Component({
  selector: 'app-problem4',
  standalone: true,
  imports: [CommonModule, ProductListComponent, CartComponent],
  template: `
    <div class="problem-container">
      <h2>Problem 4: Services and Dependency Injection</h2>
      
      <div class="card mb-4">
        <h3>1. Concept of Services and DI</h3>
        <p>
          <strong>Services</strong> in Angular are singleton objects that get instantiated only once during the lifetime of an application. They contain methods that maintain data throughout the life of an application, meaning data does not get refreshed and is available all the time. The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application.
        </p>
        <p>
          <strong>Dependency Injection (DI)</strong> is a design pattern in which a class requests dependencies from external sources rather than creating them. Angular's DI framework provides dependencies to a class upon instantiation. It helps to make the application components more modular, testable, and maintainable. 
        </p>
      </div>

      <div class="card">
        <h3>2 & 3. Shared Data Service with DI (CartService)</h3>
        <p>Both components below share the same instance of <code>CartService</code> provided at the root level.</p>
        
        <div class="row mt-3">
          <div class="col">
            <app-product-list></app-product-list>
          </div>
          <div class="col">
            <app-cart></app-cart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .problem-container { padding: 20px; }
    .card { padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .mb-4 { margin-bottom: 20px; }
    .mt-3 { margin-top: 15px; }
    .row { display: flex; gap: 20px; align-items: stretch; }
    .col { flex: 1; }
  `]
})
export class Problem4Component { }
