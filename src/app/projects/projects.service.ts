import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects = [
    {
      id: 'work-by-hour',
      title: 'Work By Hour',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/t_WBH-filled/v1726236276/wbh_logo-01_xqpln0.png",
      introduction: 'Employment application for free-lancing jobs',
      // demoUrl: 'assets/demo1.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: 'Detailed description of the project...',
      challenges: 'Challenges faced...',
      technologies: ['NestJS', 'TypeScript', 'MongoDB'],
    },

    {
      id: 'finou',
      title: 'Finou',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1725987087/samples/cloudinary-logo-vector.svg",
      introduction: 'Employment application for Graphic Designers',
      // demoUrl: 'assets/demo1.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: 'Detailed description of the project...',
      challenges: 'Challenges faced...',
      technologies: ['NestJS', 'TypeScript', "MySQL", "React"],
    },

    {
      id: 'leaf',
      title: 'Leaf',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/c_crop,w_500,h_300,g_auto/v1726237707/1000_F_134814208_s2xlaoThnHAJqUpW8K4nlB99CIQTXLsG_k0nmwn_b_rgb_FFFFFF-removebg-preview-transformed_gas5kn.png",
      introduction: 'Pharmacy management system',
      // demoUrl: 'assets/demo1.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: 'Detailed description of the project...',
      challenges: 'Challenges faced...',
      technologies: ['Laravel', 'PHP', "MySQL"],
    },

    {
      id: 'chess-former',
      title: 'Chess Former',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726364275/cover_16x9-1707829224639_pse1mo-removebg-preview_tzdrdr.png",
      introduction: 'This game is inspired by the original Chess-Former. The objective is to strategically eliminate the king, with your moves constrained by the capabilities of traditional chess pieces. The game features an auto-solve function powered by advanced algorithms.',
      // demoUrl: 'assets/demo1.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: 'Detailed description of the project...',
      challenges: 'Challenges faced...',
      technologies: ['Unity', 'C#'],
    },

    {
      id: 'satellite-simulation',
      title: 'Satellite Simulation',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726364210/istockphoto-1208005312-612x612_hkrxiw-removebg-preview_nemcx4.png",
      introduction: 'This project models a satellite’s elliptical motion, including its orbital transitions and the gravitational influences of planets. It provides real-time data on the satellite’s location and speed.',
      // demoUrl: 'assets/demo1.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: 'Detailed description of the project...',
      challenges: 'Challenges faced...',
      technologies: ['ThreeJS', 'JavaScript', 'HTML', 'CSS'],
    },

  ];

  constructor() {}

  getProjectById(id: string) {
    return this.projects.find((project) => project.id === id);
  }

  getAllProjects(){
    return this.projects;
  }
}
