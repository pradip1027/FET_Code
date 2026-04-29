import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, timer, concat, forkJoin, combineLatest, of, Subscription, from } from 'rxjs';
import { map, filter, first, take, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-problem2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="problem-container">
      <h2>Problem 2: Advanced Observables & Promises</h2>

      <div class="card">
        <h3>1. Observable Functions</h3>
        <button class="btn" (click)="runInterval()">interval()</button>
        <button class="btn ms-2" (click)="runTimer()">timer()</button>
        <button class="btn ms-2" (click)="runConcat()">concat()</button>
        <button class="btn ms-2" (click)="runForkJoin()">forkJoin()</button>
        <button class="btn ms-2" (click)="runCombineLatest()">combineLatest()</button>
        
        <div class="mt-2 result-box">
          <strong>Results:</strong>
          <ul>
            <li *ngFor="let res of funcResults">{{ res }}</li>
          </ul>
        </div>
      </div>

      <div class="card mt-3">
        <h3>2. RxJS Operators</h3>
        <button class="btn" (click)="runOperators()">Run Operators</button>
        <div class="mt-2 result-box">
          <strong>Results (Check console too):</strong>
          <ul>
            <li *ngFor="let res of opResults">{{ res }}</li>
          </ul>
        </div>
      </div>

      <div class="card mt-3">
        <h3>3. Promises</h3>
        <p>A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>
        <button class="btn" (click)="runPromise()">Run Promise Example</button>
        <div class="mt-2 result-box">
          <strong>Promise Result:</strong>
          <p>{{ promiseResult }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .problem-container { padding: 20px; }
    .card { padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .mt-2 { margin-top: 10px; }
    .mt-3 { margin-top: 20px; }
    .ms-2 { margin-left: 10px; }
    .btn { padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 5px; }
    .btn:hover { background-color: #218838; }
    .result-box { background: #f8f9fa; padding: 10px; border-radius: 4px; max-height: 200px; overflow-y: auto; }
  `]
})
export class Problem2Component implements OnDestroy {
  funcResults: any[] = [];
  opResults: any[] = [];
  promiseResult: string = '';
  
  private activeSub?: Subscription;

  ngOnDestroy() {
    this.clearSub();
  }

  clearSub() {
    if (this.activeSub) {
      this.activeSub.unsubscribe();
    }
    this.funcResults = [];
  }

  // 1. Observable Functions
  runInterval() {
    this.clearSub();
    this.funcResults.push('Starting interval(1000)...');
    this.activeSub = interval(1000).pipe(take(5)).subscribe(val => {
      this.funcResults.push(`Interval tick: ${val}`);
    });
  }

  runTimer() {
    this.clearSub();
    this.funcResults.push('Starting timer(2000) - waits 2s then emits 0');
    this.activeSub = timer(2000).subscribe(val => {
      this.funcResults.push(`Timer fired: ${val}`);
    });
  }

  runConcat() {
    this.clearSub();
    const obs1 = of('A', 'B');
    const obs2 = of('C', 'D');
    this.activeSub = concat(obs1, obs2).subscribe(val => {
      this.funcResults.push(`Concat emitted: ${val}`);
    });
  }

  runForkJoin() {
    this.clearSub();
    const obs1 = of('Result 1');
    const obs2 = of('Result 2');
    this.activeSub = forkJoin([obs1, obs2]).subscribe(val => {
      this.funcResults.push(`ForkJoin completed with: ${JSON.stringify(val)}`);
    });
  }

  runCombineLatest() {
    this.clearSub();
    // For demonstration, combine two fast observables
    const obs1 = of('X');
    const obs2 = of('Y');
    this.activeSub = combineLatest([obs1, obs2]).subscribe(val => {
      this.funcResults.push(`CombineLatest emitted: ${JSON.stringify(val)}`);
    });
  }

  // 2. RxJS Operators
  runOperators() {
    this.opResults = [];
    const source$ = from([1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9]);

    this.opResults.push('Source: [1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9]');

    source$.pipe(
      distinctUntilChanged(),
      filter(val => val % 2 === 0), // only even
      map(val => val * 10), // multiply by 10
      take(3) // take first 3 results
    ).subscribe(val => {
      this.opResults.push(`Operator chain result: ${val}`);
    });

    source$.pipe(first()).subscribe(val => {
      this.opResults.push(`first() operator result: ${val}`);
    });
  }

  // 3. Promises
  runPromise() {
    this.promiseResult = 'Pending...';
    
    const myPromise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve('Promise resolved successfully after 2 seconds!');
        } else {
          reject('Promise rejected.');
        }
      }, 2000);
    });

    myPromise
      .then(res => this.promiseResult = res)
      .catch(err => this.promiseResult = err);
  }
}
