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
      brief: 'Employment application for free-lancing jobs',
      introduction: 'Employment application for free-lancing jobs',
      // demoUrl: 'assets/demo1.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: [
        {
          title: 'Section Title',
          body:"Section Body"
        }
      ],
      challenges: 'Challenges faced...',
      technologies: ['NestJS', 'TypeScript', 'MongoDB'],
    },

    {
      id: 'finou',
      title: 'Finou',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726808881/Finou_j46bzz.png",
      brief: 'Employment application for Graphic Designers',
      introduction: 'Employment application for Graphic Designers',
      demoUrl: 'https://res.cloudinary.com/dxgro47nn/video/upload/v1726806776/Abd_Facebook_gsipb4.mp4',
      images: [
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806150/IMG_4973_jwaerd.jpg',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806279/IMG_4974_vnwsz2.jpg',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806154/IMG_4975_hkvlww.jpg',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806184/IMG_4976_jfuxl3.jpg',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806248/IMG_4977_p1alnr.jpg',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806250/IMG_4978_bsussg.jpg',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806243/IMG_4979_ec3s5r.jpg',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726806247/IMG_4980_i8vkld.jpg'
      ],
      overview: [
        {
          title: 'Section Title',
          body:"Section Body"
        }
      ],
      challenges: 'Challenges faced...',
      technologies: ['NestJS', 'TypeScript', "MySQL", "React"],
    },

    {
      id: 'leaf',
      title: 'Leaf',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726809009/leaves-green-icon-isolated-on-white-background-free-vector_ea1ffo.png",
      brief: 'Pharmacy management system',
      introduction: 'Pharmacy management system',
      // demoUrl: 'assets/demo1.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: [
        {
          title: 'Section Title',
          body:"Section Body"
        }
      ],
      challenges: 'Challenges faced...',
      technologies: ['Laravel', 'PHP', "MySQL"],
    },

    {
      id: 'chess-former',
      title: 'Chess Former',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726364275/cover_16x9-1707829224639_pse1mo-removebg-preview_tzdrdr.png",
      brief: 'Chess Former is a strategic puzzle game where players use chess piece movements to eliminate the king, featuring an auto-solve powered by advanced algorithms.',
      introduction: '<b>Chess Former</b> is a strategy game inspired by the original Chess-Former. Players must eliminate the king using chess pieces, with movement restricted by the traditional rules of each piece. The game integrates puzzle-solving mechanics with classic chess strategy.',
      demoUrl: 'https://gitlab.com/the-teachers-public/chess-former/-/raw/main/Chess-Former_Demo.mp4',
      // images: ['assets/img1.jpg', 'assets/img2.jpg'],
      overview: [
        {
          title:"Game Objective",
          body: "The primary goal is to use chess pieces, such as the rook, knight, and bishop, to strategically navigate the board and eliminate the opposing king. Each piece's movement is constrained by traditional chess rules, adding a layer of complexity to the puzzle-solving experience."
        },
        {
          title:"Gameplay",
          body: "The game challenges players to think critically and plan their moves carefully. Players must overcome obstacles and outmaneuver the opponent’s pieces, all while adhering to the constraints of chess piece movements. The objective is to reach and eliminate the king within the fewest possible moves."
        },
        {
          title:"Algorithm Integration",
          body: "Chess Former incorporates advanced pathfinding algorithms to enhance the gameplay experience:<br><br>" +
            "- <b>Depth-First Search (DFS):</b> Explores possible moves deeply, backtracking when necessary.<br>" +
            "- <b>Breadth-First Search (BFS):</b> Examines all potential moves at a given depth before progressing.<br>" +
            "- <b>Uniform Cost Search (UCS):</b> Optimizes the movement cost to find the most efficient path.<br>" +
            "- <b>A*:</b> Combines BFS and UCS with a custom heuristic to efficiently solve puzzles."
        },
        {
          title:"Auto-Solve Feature",
          body: "The game includes an auto-solve feature, leveraging pathfinding algorithms like DFS, BFS, UCS, and A*. The A-star algorithm is enhanced by a custom-designed heuristic that optimizes the puzzle-solving process, providing a fast and efficient solution."
        },
        {
          title:"Technologies Used",
          body: "The game was built using the <b>Unity</b> game engine, with <b>C#</b> as the primary programming language. The project greatly benefited from object-oriented programming (OOP) principles, particularly in structuring game mechanics and ensuring scalable, maintainable code."
        },
      ],
      challenges: 'A key challenge was designing an effective heuristic for the A-star algorithm. This required deep knowledge of the game and strategic thinking to create a heuristic that positively impacted the algorithm’s performance. Through critical thinking and research, a highly efficient heuristic was developed.',
      technologies: ['Unity', 'C#'],
    },

    {
      id: 'satellite-simulation',
      title: 'Satellite Simulation',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726364210/istockphoto-1208005312-612x612_hkrxiw-removebg-preview_nemcx4.png",
      brief: 'This project models a satellite’s elliptical motion, orbital transitions, and planetary gravitational influences, providing real-time location and speed data.',
      introduction:"This project presents an in-depth analysis of the physical forces that " +
        "govern the motion of satellites in outer space, with an emphasis on simulating " +
        "and predicting their orbital trajectories.The primary objective was to model the " +
        "satellite’s behavior under the influence of key forces, including Earth’s gravitational pull, " +
        "centrifugal force, and atmospheric drag.<br><br>By understanding and simulating these forces, " +
        "the project aimed to accurately forecast the satellite's path and provide insights into its long-term stability in orbit.",

      demoUrl: 'https://gitlab.com/the-teachers-public/satellite-simulation-the-teachers/-/raw/master/Photos/Satellite%20Simulation.mp4',
      images: [
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726636105/Sate-home_yurhnn.png',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726760852/orbit-illustration_3-04-2560x1440_wvsqwe.jpg',
        "https://res.cloudinary.com/dxgro47nn/image/upload/v1726636115/earth_bxfyuu.png",
        "https://res.cloudinary.com/dxgro47nn/image/upload/v1726636207/transfer_qwmtf9.png",
        "https://res.cloudinary.com/dxgro47nn/image/upload/v1726636146/mars_qlzgeb.png",
        "https://res.cloudinary.com/dxgro47nn/image/upload/v1726636165/venus_mww4xs.png",
        "https://res.cloudinary.com/dxgro47nn/image/upload/v1726636135/ex_ijftem.png"
      ],
      overview: [
        {
          title: "Methodology",
          body: "The study of the satellite's elliptical motion was conducted through independent research using online resources." +
            "All necessary equations were derived manually, without relying on pre-existing models or simulation software.<br><br>" +
            "The mathematical foundation of the project was built from scratch, ensuring a deep understanding of the physical principles at play." +
            "This hands-on approach to calculations allowed for precise control over the simulation and a clear application of the theoretical principles guiding satellite motion."
        },
        {
          title: "Physics of Satellite Motion",
          body: "The satellite's movement is governed by several key physical forces, each influencing its trajectory and stability in orbit:<br><br>" +
            "   - <b>Gravitational Force:</b> According to Newton's Law of Universal Gravitation, the satellite is constantly pulled toward Earth due to gravitational attraction. This force directly impacts the satellite’s velocity and altitude, as the strength of gravity diminishes with distance from Earth’s center.<br><br>" +
            "   - <b>Centrifugal Force:</b> This force arises from the satellite's circular motion around Earth. It acts outward, counterbalancing the inward pull of gravity, which helps maintain the satellite’s orbital stability and prevents it from falling back to Earth.<br><br>" +
            "   - <b>Drag Force:</b> In low-Earth orbits (LEO), atmospheric drag plays a significant role. As the satellite moves through the upper layers of Earth's atmosphere, it experiences resistance that gradually reduces its speed, leading to a gradual descent over time. The project analyzed the effect of this force on satellite orbit longevity.<br><br>" +
            "By applying <b>Newton's Second Law</b>, the project simulated the satellite’s dynamic response to these forces, allowing for real-time adjustments of its position and velocity. This provided valuable insights into orbital transfers, energy requirements, and optimal maneuvering strategies for maintaining or altering the satellite's path in space."
        },
        {
          title: "Simulation Framework",
          body:"The simulation was developed using <b>ThreeJS</b> and <b>Vite</b>, both of which played a crucial role in rendering the " +
            "satellite’s motion in real time.<br>ThreeJS enabled the creation of a 3D visualization of the satellite’s orbit, while Vite facilitated fast, " +
            "efficient rendering and development.<br>These tools were instrumental in providing a dynamic and interactive environment for observing how the satellite behaves under different forces, " +
            "ensuring accurate real-time feedback during the simulation process."
        }

      ],
      challenges: 'One of the challenges I faced in this project was implementing the effect of multiple planetary gravitational fields on the satellite.<br>' +
        'Accounting for the gravitational influence of multiple bodies required careful testing and adjustment of various equations to ensure that the satellite responded ' +
        'accurately to the combined forces.<br>This complex task was managed through iterative testing and the application of different mathematical models, ultimately leading to a successful simulation of multi-body gravitational effects.',
      technologies: ['ThreeJS', 'JavaScript', 'HTML', 'CSS','Vite'],
    },

    {
      id: 'QSmart',
      title: 'QSmart',
      thumbnail: "https://res.cloudinary.com/dxgro47nn/image/upload/v1726800756/thumbnail_sntu4w.png",
      brief: 'A high-performance Information Retrieval system designed for Q&A datasets, delivering fast and accurate document matching and query ranking.',
      introduction: 'The project focuses on building an efficient Information Retrieval (IR) system using two datasets:<br><b>Antique</b> and <b>Lotte/Science</b>. The aim is to retrieve relevant documents for user queries and rank them based on relevance,' +
        ' utilizing advanced techniques such as word embeddings and vector space models for optimal performance.<br><br> Used Datasets Page <a href="https://ir-datasets.com/" target="_blank"><img src="https://res.cloudinary.com/dxgro47nn/image/upload/v1726801131/OIP_ao2utb.jpg" height="15" width="15"></a>',
      // demoUrl: 'assets/demo1.mp4',
      images: [
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726803447/2_o1my3q.png',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726804078/2-r_ngkfig.png',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726803031/1_qub4c3.png',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726804745/Recall_one6nl.png',
        'https://res.cloudinary.com/dxgro47nn/image/upload/v1726804743/precision_10_iegx18.png'

      ],
      overview: [
        {
          title: 'Datasets',
          body:"<b>Antique Dataset:</b> A collection of general domain questions from Yahoo! Answers, used to match user queries with relevant answers.<br>" +
               "<b>Lotte/Science Dataset:</b> A scientific dataset designed to train models for answering domain-specific queries, with a focus on scientific information retrieval."
        },
        {
          title: 'Text Processing',
          body: '<b>Lowercasing, tokenization, Regex:</b> Standardized the text for further analysis.<br>' +
                '<b>Part of Speech (POS) tagging, lemmatization, and stemming:</b>  Processed words to their root form, improving the system’s ability to recognize similar terms across documents.<br>' +
                '<b>Stop word removal:</b> Eliminated common, irrelevant words to focus on meaningful content.'
        },
        {
          title: 'Data Representation',
          body: 'The system utilized a <b>TF-IDF Vector Space Model</b>, allowing for efficient representation of document-term relationships. This model significantly enhanced matching and ranking speed and accuracy, as well as query refinement. The processed queries were used to generate suggestions for users, improving both the relevance and interactivity of the search system.'
        },
        {
          title: 'Word Embedding Models',
          body: 'Two word embedding models were implemented to improve document matching:<br><br>' +
            '<b>- Word2Vector:</b> A word embedding model that computes the average vector for tokens within documents.<br>' +
            '<b>- Hugging Face (Sentence Transformers):</b> This model, specialized for Q&A questions, significantly outperformed Word2Vector, providing highly accurate results due to its focus on sentence-level embeddings. This proved particularly useful for the Q&A datasets, resulting in substantial gains in system performance.'
        },
        {
          title: 'Query Matching and Ranking',
          body: 'Queries were matched to documents using:<br><br>' +
            '<b>Cosine Similarity:</b> Measured the similarity between query and document vectors.<br><br>' +
            '<b>Length Normalization:</b> Adjusted document importance based on word count, balancing relevance across shorter and longer documents.<br><br>' +
            'The combination of these methods with word embeddings and vector space ensured fast and accurate results.'
        },
      ],
      challenges: 'Achieving high <b>MAP</b> (Mean Average Precision) and <b>MRR</b> (Mean Reciprocal Rank) values was one of the main challenges. To overcome this, advanced technologies like word embedding models and vector spaces were utilized. The development of a specialized word embedding model (Sentence Transformers) tailored for Q&A datasets led to significant improvements in MAP and MRR scores.',
      technologies: ['NestJS','TypeScript','Python','ChromaDB'],
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
