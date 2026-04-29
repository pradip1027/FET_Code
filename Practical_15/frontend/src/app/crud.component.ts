import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="box">
      <h3>{{ isEditing ? 'Edit Student' : 'Add New Student' }}</h3>
      <form (submit)="onSubmit($event)">
        <label>Roll No:</label>
        <input type="text" [(ngModel)]="student.rollNo" name="rollNo" required>
        
        <label>Name:</label>
        <input type="text" [(ngModel)]="student.name" name="name" required>
        
        <label>Course:</label>
        <input type="text" [(ngModel)]="student.course" name="course" required>
        
        <label>Branch:</label>
        <input type="text" [(ngModel)]="student.branch" name="branch" required>
        
        <label>Fee:</label>
        <input type="number" [(ngModel)]="student.fee" name="fee" required>
        
        <button type="submit">{{ isEditing ? 'Update' : 'Save' }}</button>
        <button type="button" *ngIf="isEditing" (click)="cancelEdit()">Cancel</button>
      </form>
    </div>

    <div class="box">
      <h3>Student Records</h3>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Course</th>
            <th>Branch</th>
            <th>Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of students">
            <td>{{ s.rollNo }}</td>
            <td>{{ s.name }}</td>
            <td>{{ s.course }}</td>
            <td>{{ s.branch }}</td>
            <td>{{ s.fee }}</td>
            <td>
              <button (click)="editStudent(s)">Edit</button>
              <button (click)="deleteStudent(s._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class CrudComponent implements OnInit {
  students: any[] = [];
  student = { _id: '', rollNo: '', name: '', course: '', branch: '', fee: '' };
  isEditing = false;

  constructor(private studentService: StudentService) {}

  ngOnInit() { this.loadStudents(); }

  loadStudents() {
    this.studentService.getStudents().subscribe((data) => this.students = data);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.isEditing) {
      this.studentService.updateStudent(this.student._id, this.student).subscribe(() => {
        this.loadStudents();
        this.cancelEdit();
      });
    } else {
      const { _id, ...newData } = this.student; // Ignore empty ID for new inserts
      this.studentService.createStudent(newData).subscribe(() => {
        this.loadStudents();
        this.cancelEdit();
      });
    }
  }

  editStudent(s: any) {
    this.student = { ...s };
    this.isEditing = true;
  }

  cancelEdit() {
    this.student = { _id: '', rollNo: '', name: '', course: '', branch: '', fee: '' };
    this.isEditing = false;
  }

  deleteStudent(id: string) {
    if (confirm('Delete this record?')) {
      this.studentService.deleteStudent(id).subscribe(() => this.loadStudents());
    }
  }
}
