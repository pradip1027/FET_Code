import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  id: string;
  name: string;
  gender: string;
  dateOfBirth: string;
  education: string;
  course: string;
  branch: string;
  fee: number;
  image: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentComponent {
  student = signal<Student>({
    id: 'STU001',
    name: 'John Doe',
    gender: 'Male',
    dateOfBirth: '1995-05-15',
    education: 'Bachelor of Engineering',
    course: 'Computer Science',
    branch: 'CSE',
    fee: 50000,
    image: 'https://via.placeholder.com/150'
  });

  // For two-way binding demonstration
  editableName = signal<string>(this.student().name);
  editableFee = signal<number>(this.student().fee);

  updateName() {
    this.student.update(stu => ({ ...stu, name: this.editableName() }));
  }

  updateFee() {
    this.student.update(stu => ({ ...stu, fee: this.editableFee() }));
  }

  resetToDefaults() {
    this.student.set({
      id: 'STU001',
      name: 'John Doe',
      gender: 'Male',
      dateOfBirth: '1995-05-15',
      education: 'Bachelor of Engineering',
      course: 'Computer Science',
      branch: 'CSE',
      fee: 50000,
      image: 'https://via.placeholder.com/150'
    });
    this.editableName.set(this.student().name);
    this.editableFee.set(this.student().fee);
  }
}