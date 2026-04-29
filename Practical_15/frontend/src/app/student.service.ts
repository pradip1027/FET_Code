import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private url = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> { return this.http.get<any[]>(this.url); }
  createStudent(data: any): Observable<any> { return this.http.post(this.url, data); }
  updateStudent(id: string, data: any): Observable<any> { return this.http.put(`${this.url}/${id}`, data); }
  deleteStudent(id: string): Observable<any> { return this.http.delete(`${this.url}/${id}`); }
}
