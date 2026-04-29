import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface Student {
  sid: number;
  name: string;
  course: string;
  branch: string;
  fee: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-problem1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="problem-container">
      <h2>Problem 1: Observables</h2>
      
      <!-- Sub-problem 1: of() function -->
      <div class="card">
        <h3>1. of() Observable</h3>
        <button class="btn" (click)="triggerOfObservable()">Trigger Observable</button>
        <div class="mt-2">
          <strong>Emitted Values:</strong>
          <ul>
            <li *ngFor="let val of ofValues">{{ val }}</li>
          </ul>
        </div>
      </div>

      <!-- Sub-problem 2: Student records -->
      <div class="card mt-3">
        <h3>2. Student Records (setTimeout & next)</h3>
        <table class="table">
          <thead>
            <tr>
              <th>SID</th><th>Name</th><th>Course</th><th>Branch</th><th>Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let student of students">
              <td>{{ student.sid }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.branch }}</td>
              <td>{{ student.fee }}</td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="students.length === 0">Loading students...</div>
      </div>

      <!-- Sub-problem 3: Mobile Products (async pipe, map, filter) -->
      <div class="card mt-3">
        <h3>3. Mobile Products (async, map, filter)</h3>
        <p>Showing only Mobile products with price > 20000</p>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Price</th><th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let mobile of filteredMobiles$ | async">
              <td>{{ mobile.id }}</td>
              <td>{{ mobile.name }}</td>
              <td>{{ mobile.price }}</td>
              <td>{{ mobile.category }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sub-problem 4: Product Data Filtering -->
      <div class="card mt-3">
        <h3>4. All Products vs Filtered Products</h3>
        
        <div class="row">
          <div class="col">
            <h4>All Products:</h4>
            <ul>
              <li *ngFor="let p of allProducts">{{ p.name }} - &#36;{{ p.price }}</li>
            </ul>
          </div>
          <div class="col">
            <h4>Filtered (> $1000):</h4>
            <ul>
              <li *ngFor="let p of filteredProducts">{{ p.name }} - &#36;{{ p.price }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .problem-container { padding: 20px; }
    .card { padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .mt-2 { margin-top: 10px; }
    .mt-3 { margin-top: 20px; }
    .btn { padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
    .btn:hover { background-color: #0056b3; }
    .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .table th, .table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    .table th { background-color: #f2f2f2; }
    .row { display: flex; gap: 20px; }
    .col { flex: 1; }
  `]
})
export class Problem1Component implements OnInit, OnDestroy {
  // Sub-problem 1
  ofValues: any[] = [];
  private ofSubscription?: Subscription;

  // Sub-problem 2
  students: Student[] = [];
  
  // Sub-problem 3
  filteredMobiles$!: Observable<Product[]>;

  // Sub-problem 4
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  private productSub?: Subscription;

  ngOnInit() {
    this.loadStudents();
    this.initMobiles();
    this.initProducts();
  }

  ngOnDestroy() {
    if (this.ofSubscription) {
      this.ofSubscription.unsubscribe();
    }
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }

  // 1. of() Observable
  triggerOfObservable() {
    this.ofValues = [];
    const myObservable = of(1, 'Apple', 2, 'Banana', 3);
    
    this.ofSubscription = myObservable.subscribe({
      next: (val) => {
        this.ofValues.push(val);
        console.log('of() emitted:', val);
      },
      complete: () => console.log('of() completed')
    });
  }

  // 2. Student Records
  loadStudents() {
    const studentObservable = new Observable<Student>(subscriber => {
      setTimeout(() => {
        subscriber.next({ sid: 1, name: 'John Doe', course: 'B.Tech', branch: 'CSE', fee: 50000 });
        subscriber.next({ sid: 2, name: 'Jane Smith', course: 'B.Tech', branch: 'IT', fee: 45000 });
        subscriber.next({ sid: 3, name: 'Sam Brown', course: 'B.Tech', branch: 'ECE', fee: 40000 });
        subscriber.next({ sid: 4, name: 'Lisa Ray', course: 'B.Tech', branch: 'ME', fee: 35000 });
        subscriber.next({ sid: 5, name: 'Tom Hardy', course: 'B.Tech', branch: 'CE', fee: 30000 });
        subscriber.complete();
      }, 2000);
    });

    studentObservable.subscribe(student => {
      this.students.push(student);
    });
  }

  // 3. Mobile Products
  initMobiles() {
    const mobiles: Product[] = [
      { id: 1, name: 'iPhone 13', price: 60000, category: 'Mobile' },
      { id: 2, name: 'Samsung Galaxy S22', price: 55000, category: 'Mobile' },
      { id: 3, name: 'Nokia 3310', price: 5000, category: 'Mobile' },
      { id: 4, name: 'MacBook Pro', price: 150000, category: 'Laptop' }
    ];

    const mobileObservable = of(mobiles);

    this.filteredMobiles$ = mobileObservable.pipe(
      map(products => products.filter(p => p.category === 'Mobile')),
      map(mobiles => mobiles.filter(m => m.price > 20000))
    );
  }

  // 4. Product Filtering
  initProducts() {
    const products: Product[] = [
      { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
      { id: 2, name: 'Phone', price: 800, category: 'Electronics' },
      { id: 3, name: 'Tablet', price: 500, category: 'Electronics' },
      { id: 4, name: 'Desktop', price: 1500, category: 'Electronics' }
    ];

    const prodObs = of(...products);
    
    // Store all
    prodObs.subscribe(p => this.allProducts.push(p));

    // Store filtered
    this.productSub = prodObs.pipe(
      filter(p => p.price > 1000)
    ).subscribe(p => this.filteredProducts.push(p));
  }
}
