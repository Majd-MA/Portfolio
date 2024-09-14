import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgStyle,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {
  projects = [
    {
      name: "Work By Hour",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/t_WBH-filled/v1726236276/wbh_logo-01_xqpln0.png",
      description: "Employment application for free-lancing jobs",
    },
    {
      name: "Finou",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/v1725987087/samples/cloudinary-logo-vector.svg",
      description: "Employment application for Graphic Designers",
    },
    {
      name: "Leaf",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/c_crop,w_500,h_300,g_auto/v1726237707/1000_F_134814208_s2xlaoThnHAJqUpW8K4nlB99CIQTXLsG_k0nmwn_b_rgb_FFFFFF-removebg-preview-transformed_gas5kn.png",
      description: "Pharmacy management system",
    },
    {
      name:"Chess Former",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726274969/cover_16x9-1707829224639_pse1mo.jpg",
      description: "This game is inspired by the original Chess-Former. The objective is to strategically eliminate the king, with your moves constrained by the capabilities of traditional chess pieces. The game features an auto-solve function powered by advanced algorithms.",
    },
    {
      name: "Satellite Simulation",
      image: "https://res.cloudinary.com/dxgro47nn/image/upload/t_leaf-croped/v1726275899/istockphoto-1208005312-612x612_hkrxiw.jpg",
      description: "This project models a satellite’s elliptical motion, including its orbital transitions and the gravitational influences of planets. It provides real-time data on the satellite’s location and speed.",
    }
  ];


}

