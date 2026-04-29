import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface EmployeeRecord {
  name: string;
  fatherName: string;
  address: string;
  education: string;
  contactNumber: string;
  gender: string;
  
  empId: string;
  department: string;
  designation: string;
  payScale: string;
  
  basicSalary: number;
  month: string;
  absentDays: number;
  
  da: number;
  hra: number;
  pf: number;
  grossSalary: number;
  leaveDeduction: number;
  tds: number;
  netSalary: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Payroll Management System';

  employeeRecords: EmployeeRecord[] = [];
  
  currentEmployee: EmployeeRecord = this.getEmptyEmployee();
  searchQuery: string = '';
  isEditing: boolean = false;

  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales'];
  designations = ['Manager', 'Developer', 'Designer', 'Analyst', 'Tester'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  getEmptyEmployee(): EmployeeRecord {
    return {
      name: '', fatherName: '', address: '', education: '', contactNumber: '', gender: '',
      empId: '', department: '', designation: '', payScale: '',
      basicSalary: 0, month: '', absentDays: 0,
      da: 0, hra: 0, pf: 0, grossSalary: 0, leaveDeduction: 0, tds: 0, netSalary: 0
    };
  }

  onEmpIdChange() {
    const existing = this.employeeRecords.find(e => e.empId === this.currentEmployee.empId);
    if (existing && !this.isEditing) {
      // Auto-populate if editing by typing ID
      this.currentEmployee = { ...existing };
      this.isEditing = true;
    } else if (!existing && this.isEditing) {
      // Reset if typed ID is new
      const id = this.currentEmployee.empId;
      this.currentEmployee = this.getEmptyEmployee();
      this.currentEmployee.empId = id;
      this.isEditing = false;
    }
  }

  calculateSalary() {
    let daRate = 0;
    let hraRate = 0;
    let pfRate = 0.10; // 10% of gross
    let tdsRate = 0;
    let netThreshold = 0;

    // 1. Pay Scale Rules
    if (this.currentEmployee.payScale === '1') {
      daRate = 1.0; // 100%
      hraRate = 0.20; // 20%
      netThreshold = 40000;
      tdsRate = 0.02; // 2%
    } else if (this.currentEmployee.payScale === '2') {
      daRate = 1.50; // 150%
      hraRate = 0.30; // 30%
      netThreshold = 60000;
      tdsRate = 0.03; // 3%
    } else if (this.currentEmployee.payScale === '3') {
      daRate = 2.0; // 200%
      hraRate = 0.30; // 30%
      netThreshold = 800000;
      tdsRate = 0.05; // 5%
    }

    const basic = this.currentEmployee.basicSalary || 0;
    this.currentEmployee.da = basic * daRate;
    this.currentEmployee.hra = basic * hraRate;
    this.currentEmployee.grossSalary = basic + this.currentEmployee.da + this.currentEmployee.hra;
    this.currentEmployee.pf = this.currentEmployee.grossSalary * pfRate;

    // 2. Leave Deduction (LWP)
    const dailySalary = this.currentEmployee.grossSalary / 30;
    const absent = this.currentEmployee.absentDays || 0;
    // 1 CL allowed per month
    const lwpDays = Math.max(0, absent - 1);
    this.currentEmployee.leaveDeduction = lwpDays * dailySalary;

    // 3. Net Salary Before TDS
    let netBeforeTds = this.currentEmployee.grossSalary - this.currentEmployee.pf - this.currentEmployee.leaveDeduction;

    // 4. TDS
    if (netBeforeTds > netThreshold) {
      this.currentEmployee.tds = this.currentEmployee.grossSalary * tdsRate;
    } else {
      this.currentEmployee.tds = 0;
    }

    // 5. Final Net Salary
    this.currentEmployee.netSalary = netBeforeTds - this.currentEmployee.tds;
  }

  onSubmit() {
    this.calculateSalary();
    if (this.isEditing) {
      const index = this.employeeRecords.findIndex(e => e.empId === this.currentEmployee.empId);
      if (index !== -1) {
        this.employeeRecords[index] = { ...this.currentEmployee };
      }
    } else {
      // Add new
      if (this.employeeRecords.find(e => e.empId === this.currentEmployee.empId)) {
        alert("Employee ID already exists!");
        return;
      }
      this.employeeRecords.push({ ...this.currentEmployee });
    }
    this.resetForm();
  }

  editRecord(emp: EmployeeRecord) {
    this.currentEmployee = { ...emp };
    this.isEditing = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteRecord(empId: string) {
    if(confirm('Are you sure you want to delete this record?')) {
      this.employeeRecords = this.employeeRecords.filter(e => e.empId !== empId);
      if (this.currentEmployee.empId === empId) {
        this.resetForm();
      }
    }
  }

  resetForm() {
    this.currentEmployee = this.getEmptyEmployee();
    this.isEditing = false;
  }

  get filteredRecords() {
    if (!this.searchQuery) return this.employeeRecords;
    const lowerQuery = this.searchQuery.toLowerCase();
    return this.employeeRecords.filter(e => 
      e.empId.toLowerCase().includes(lowerQuery) || 
      e.name.toLowerCase().includes(lowerQuery) ||
      e.department.toLowerCase().includes(lowerQuery)
    );
  }
}

