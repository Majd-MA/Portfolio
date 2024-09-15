import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgStyle,
    NgIf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: "Work By Hour",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/t_WBH-filled/v1726236276/wbh_logo-01_xqpln0.png",
      description: "Employment application for free-lancing jobs",
      tags: ['NestJS', 'TypeScript', 'MongoDB'],
    },
    {
      name: "Finou",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/v1725987087/samples/cloudinary-logo-vector.svg",
      description: "Employment application for Graphic Designers",
      tags: ['NestJS', 'TypeScript', "MySQL", "React"],
    },
    {
      name: "Leaf",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/c_crop,w_500,h_300,g_auto/v1726237707/1000_F_134814208_s2xlaoThnHAJqUpW8K4nlB99CIQTXLsG_k0nmwn_b_rgb_FFFFFF-removebg-preview-transformed_gas5kn.png",
      description: "Pharmacy management system",
      tags: ['Laravel', 'PHP', "MySQL"],
    },
    {
      name: "Chess Former",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726364275/cover_16x9-1707829224639_pse1mo-removebg-preview_tzdrdr.png",
      description: "This game is inspired by the original Chess-Former. The objective is to strategically eliminate the king, with your moves constrained by the capabilities of traditional chess pieces. The game features an auto-solve function powered by advanced algorithms.",
      tags: ['Unity', 'C#'],
    },
    {
      name: "Satellite Simulation",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726364210/istockphoto-1208005312-612x612_hkrxiw-removebg-preview_nemcx4.png",
      description: "This project models a satellite’s elliptical motion, including its orbital transitions and the gravitational influences of planets. It provides real-time data on the satellite’s location and speed.",
      tags: ['ThreeJS', 'JavaScript', 'HTML', 'CSS'],
    }
  ];

  isPopupVisible = false;
  selectedTags: string[] = [];
  showTip = true;
  filteredProjects = this.projects;


  // Example categories
  resources = ['NestJS', 'Laravel', 'ThreeJS', 'Unity', 'MongoDB', "MySQL", "React"];
  technologies = ['TypeScript', 'JavaScript', "PHP", 'Python', "C#", "ProLog", "HTML", "CSS"];

  ngOnInit() {
    setTimeout(() => {
      this.showTip = false;
    }, 3000);
  }

  hideTip() {
    this.showTip = false;
  }

  toggleFilterPopup() {
    this.isPopupVisible = !this.isPopupVisible;
    this.showTip = false
  }

  isSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  toggleTag(tag: string) {
    if (this.isSelected(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag); // Remove tag if already selected
    } else {
      this.selectedTags.push(tag);
    }
    this.filterProjects();
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
    this.filterProjects();
  }

  filterProjects() {
    if (this.selectedTags.length === 0) {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        this.selectedTags.every(tag => project.tags.includes(tag))
      );
      console.log(this.filteredProjects)
    }
  }

}

