import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-problem3',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="problem-container">
      <h2>Problem 3: Real Life Example of Observable</h2>
      
      <div class="card">
        <h3>Search Typeahead (Autocomplete)</h3>
        <p>This example demonstrates how Observables are used in real-world scenarios for search inputs using <code>debounceTime</code>, <code>distinctUntilChanged</code>, and <code>switchMap</code>.</p>
        
        <div class="form-group">
          <label for="search">Search Countries:</label>
          <input 
            type="text" 
            id="search" 
            [formControl]="searchControl" 
            class="form-control" 
            placeholder="Type 'in' or 'us'..."
          >
        </div>

        <div class="mt-3">
          <div *ngIf="isSearching" class="text-info">Searching...</div>
          
          <ul class="list-group" *ngIf="(results$ | async) as results">
            <li class="list-group-item" *ngFor="let result of results">
              {{ result }}
            </li>
            <li class="list-group-item text-muted" *ngIf="results.length === 0 && searchControl.value">
              No results found.
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .problem-container { padding: 20px; }
    .card { padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .form-group { margin-bottom: 15px; }
    .form-control { width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ccc; }
    .mt-3 { margin-top: 15px; }
    .list-group { list-style-type: none; padding: 0; margin: 0; }
    .list-group-item { padding: 10px; border: 1px solid #eee; border-bottom: none; }
    .list-group-item:last-child { border-bottom: 1px solid #eee; }
    .text-info { color: #17a2b8; }
    .text-muted { color: #6c757d; }
  `]
})
export class Problem3Component implements OnInit {
  searchControl = new FormControl('');
  results$!: Observable<string[]>;
  isSearching = false;

  // Mock API call
  private mockApiSearch(term: string): Observable<string[]> {
    const countries = [
      'India', 'Indonesia', 'United States', 'United Kingdom', 
      'United Arab Emirates', 'Canada', 'Australia', 'Germany', 
      'France', 'Italy', 'Spain', 'Japan', 'China', 'Brazil'
    ];

    return of(countries).pipe(
      map(list => list.filter(c => c.toLowerCase().includes(term.toLowerCase())))
    );
  }

  ngOnInit() {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(300), // wait 300ms after each keystroke
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(term => {
        this.isSearching = true;
        if (!term || term.trim() === '') {
          this.isSearching = false;
          return of([]);
        }
        
        // Return new observable, cancelling previous requests if new one comes in
        return this.mockApiSearch(term).pipe(
          map(results => {
            this.isSearching = false;
            return results;
          }),
          catchError(() => {
            this.isSearching = false;
            return of([]);
          })
        );
      })
    );
  }
}
