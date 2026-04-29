import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Biodata {
  personal: {
    name: string;
    fatherName: string;
    address: string;
    contactNumber: string;
    image: string;
  };
  educational: {
    ssc: string;
    hsc: string;
    graduation: string;
  };
  skills: string[];
  hobbies: string;
  declaration: string;
}

@Component({
  selector: 'app-biodata',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './biodata.html',
  styleUrl: './biodata.css'
})
export class BiodataComponent {
  biodata = signal<Biodata>({
    personal: {
      name: '',
      fatherName: '',
      address: '',
      contactNumber: '',
      image: ''
    },
    educational: {
      ssc: '',
      hsc: '',
      graduation: ''
    },
    skills: [],
    hobbies: '',
    declaration: ''
  });

  skillOptions = ['MS Office', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];

  toggleSkill(skill: string) {
    const currentSkills = this.biodata().skills;
    if (currentSkills.includes(skill)) {
      this.biodata.update(data => ({
        ...data,
        skills: currentSkills.filter(s => s !== skill)
      }));
    } else {
      this.biodata.update(data => ({
        ...data,
        skills: [...currentSkills, skill]
      }));
    }
  }

  submitBiodata() {
    console.log('Biodata submitted:', this.biodata());
    alert('Biodata submitted successfully! Check console for details.');
  }
}