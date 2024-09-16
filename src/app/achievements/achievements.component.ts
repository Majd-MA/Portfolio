import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {PageService} from "../page.service";

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.less'
})
export class AchievementsComponent implements OnInit{
  constructor(private pageService: PageService) {}

  achievements = [
    {
      image:"https://res.cloudinary.com/dxgro47nn/image/upload/v1726416300/Software-Development-Logo_saonzt_i1zw2n.png",
      name:"Software Engineering Specialization",
      source:"The Hong Kong University of Science and Technology",
      description:"This specialization covers software engineering methodologies, techniques, and tools for planning, capturing requirements, designing,implementing, testing, and maintaining large-scale software systems.",
      link:"https://coursera.org/verify/specialization/4TMW6669TLLW",
    },
    {
      image:"https://res.cloudinary.com/dxgro47nn/image/upload/v1726417043/29222311375_qbyjgb.png",
      name:" Modeling Software Systems using UML",
      source:"The Hong Kong University of Science and Technology",
      description:"This course explores advanced software modeling techniques and requirement capturing. Students will learn domain modeling, use case modeling, and specification to define functional requirements. The course also covers documenting non-functional requirements to meet performance, security, and usability standards, with practical exercises for hands-on experience.",
      link:"https://coursera.org/share/fc8163e6e56eda48a1306484943977d1",
    },
    {
      image:"https://res.cloudinary.com/dxgro47nn/image/upload/v1726416642/11034050690_hzwqm6.png",
      name:"Software Design and Project Management",
      source:"The Hong Kong University of Science and Technology",
      description:"This course focuses on system analysis and design, teaching students to use diagrams and design patterns to solve software design problems. It emphasizes software quality assurance and best practices for managing development projects. Through practical exercises, students will learn to analyze, design, and manage high-quality software systems.",
      link:"https://coursera.org/share/98aae6746c36601ae90cc97568c41fcb",
    },
    {
      image:"https://res.cloudinary.com/dxgro47nn/image/upload/v1726415505/Software-Development-Logo---Course-2_rkzybd_grzr4z.png",
      name:"Implementation and Testing",
      source:"The Hong Kong University of Science and Technology",
      description:"This course offers a thorough introduction to software engineering, covering the entire Software Development Life Cycle (SDLC) with both plan-driven and agile models. Students will learn defensive programming, debugging strategies, and various testing methods, including white-box, black-box, and acceptance testing, to ensure robust, secure, and reliable software.",
      link:"https://coursera.org/share/a743910e2e4c7e1418888cb63f83a907",
    },
  ];

  ngOnInit(): void {
    this.pageService.setInitIndex(2);
  }
}
