import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects = [
    {
      id: 'work-by-hour',
      title: 'Work By Hour',
      thumbnail: "/t_WBH-filled/v1726236276/wbh_logo-01_xqpln0.png",
      brief: 'Employment Platform designed for hour-based work, leveraging advanced and secure technologies to streamline job matching and management.',
      introduction: 'Is a mobile and web platform designed to connect service providers with customers for hourly-based jobs. The system is optimized for performance and security, with a focus on efficient service matching, negotiation. The project integrates advanced backend functionalities, ensuring secure, real-time negotiation between users and streamlined job management.',
      prototype:"https://embed.figma.com/proto/8LaxHS1iCLffQlfBZQCTOv/Work-By-Hour?node-id=24-5831&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A5831&embed-host=share",
      overview: [
        {
          title: 'Project Scope',
          body: 'The system\'s primary goal is to streamline the process of matching service providers with customers who need their help. It allows:<br><br>' +
            '<b>➖Service Providers</b> to showcase their skills, manage their schedules, and apply for jobs posted by customers.<br>' +
            '<b>➖Customers</b> to post job listings, review service providers, and choose the best person for their needs.<br><br>' +
            '<b>Both parties</b> to interact securely, negotiate details, and leave feedback, ensuring transparency and quality.'
        },
        {
          title: 'Nonfunctional Requirements',
          body:  '<b>Performance Optimization:</b> <br>' +
            '<b>➖ Lazy Loading:</b> Only load the parts of the app needed by the user at any given time to enhance speed.<br>' +
            '<b>➖ Pagination:</b> Limit the display of data to improve performance.<br><br>' +
            '<b>Image Optimization:</b> Convert images to AVIF format, which reduces their size and improves loading times.<br>'

        },
        {
          title: 'Recommendation System',
          body: 'The <b>Work By Hour</b> platform features an advanced <b>Knowledge-based Recommendation System</b> designed to match service providers with jobs that align with their skills, location, experience, and customer satisfaction. This system enhances the job-matching process by intelligently selecting the most suitable jobs for each service provider, rather than displaying all available jobs.<br><ul>' +
            '<li><b>Multi-Criteria Evaluation:</b> The recommendation system considers factors such as cost, location, and past performance (ratings), ensuring that job requirements align with the service provider\'s capabilities.</li>' +
            '<li><b>Dynamic Weighting:</b> The system uses dynamic weights to evaluate different factors like experience and customer satisfaction, making the recommendations more precise and effective.</li>' +
            '<li><b>Dual Methodology:</b> The system integrates both <b>Content-based</b> filtering and <b>Knowledge-based</b> recommendations, allowing for more accurate and personalized job suggestions for each service provider.</li>' +
            '<li><b>Feedback Mechanism:</b> Service providers can provide feedback on job recommendations, helping to refine and improve the system’s accuracy over time.</li>' +
            '<li><b>Data Collection and Analysis:</b> The system continuously collects data on job completion, customer satisfaction, and recommendation outcomes, which are analyzed to improve long-term recommendation performance.</li></ul>'

        },
        {
          title: 'Technologies Used',
          body:"<b>Backend:</b> The backend was developed using <b>NestJS</b>, providing fast, asynchronous logic handling, particularly important for real-time features like negotiation.<br><br>" +
               "<b>Real-Time Communication:</b> Implemented with <b>Socket.io</b>, real-time negotiation allowed service providers and customers to securely negotiate job offers in a closed room. The system was built with <b>middleware</b> to ensure secure WebSocket connections and manage errors effectively.<br>"
        },
      ],
      challenges: '<b>Authentication for Real-Time Negotiation:</b> One major challenge was securing the WebSocket connections for negotiation. This was solved by creating middleware to handle socket connections securely, ensuring only authenticated users could enter negotiation rooms.<br><br>' +
                  '<b>Error Handling in WebSockets:</b> Another challenge was managing errors triggered by WebSocket connections before the global error filter could catch them, which risked stopping the server. This was resolved by implementing a separate middleware to handle WebSocket errors and log them for further analysis, improving stability and debugging efficiency.<br>',
      technologies: ['NestJS', 'TypeScript', 'MongoDB','Socket.io','Firebase'],
    },

    {
      id: 'finou',
      title: 'Finou',
      thumbnail: "/v1726808881/Finou_j46bzz.png",
      brief: 'Social platform for designers to enhance skills, showcase portfolios, and connect with companies through contests and job opportunities.',
      introduction: 'This mobile app is designed for <b>designers</b> from various specialties—such as logo creation, video editing, and more—providing a comprehensive platform for building portfolios, participating in contests, and connecting with companies for job opportunities. The app’s features include real-time communication, automated contests, and advanced image handling, making it an essential tool for designers to showcase their skills and enhance their career growth.',
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
          title: 'Key Benefits',
          body:"<b>Portfolio Management:</b> Designers can build professional portfolios to display their work, helping them gain visibility and increase their chances of being hired.<br><br>" +
               "<b>Skill Development through Contests:</b> Automated and custom contests challenge designers to improve their skills. Winners are selected based on a voting system, rewarding beauty and relevance to the contest’s description.<br><br>" +
               "<b>Career Opportunities:</b> The <b>Hire section</b> allows designers to promote their skills, while companies can post job listings and host private contests to find the best talent.<br><br>" +
               "<b>Experience Points and Leveling:</b> Contest winners gain experience points, raising their profile level, which serves as a measure of their expertise.<br><br>" +
               "<b>Real-Time Interaction:</b> The built-in chat system enables seamless communication between designers and companies, fostering collaboration and quick responses.<br><br>" },
        {
          title: 'Main Features',
          body: '<b>Designer Portfolio Management:</b> Designers can create portfolios to showcase their work and expertise, making it easier for companies to find the right talent.<br><br>' +
                '<b>Contest System:</b> A combination of automated and custom contests gives designers the opportunity to compete, with winners chosen through a transparent voting system.<br><br>' +
                '<b>Voting System:</b> The community votes on the best designs, with winners selected based on beauty and alignment with the contest description.<br><br>' +
                '<b>Hire Section:</b> Designers can post their availability, while companies can create profiles, post jobs, and organize private contests to evaluate applicants.<br><br>' +
                '<b>Real-Time Communication:</b> Designers and companies can communicate instantly, with middleware ensuring security and proper management of chats.<br><br>' +
                '<b>Statistics Dashboard:</b> Admins and designers have access to performance insights, tracking skill development, contest performance, and more.<br><br>'
        },
        {
          title: 'Technologies Used',
          body: '<b>Real-Time Communication:</b> Socket.io for real-time messaging, integrated with security middleware to ensure safe interactions.<br><br>' +
                '<b>Cloudinary:</b> Integrated to manage user-uploaded images, including AVIF compression, lazy loading, and streamlined image handling for optimal app performance.'
        },

      ],
      challenges: '<b>➖ Scalability:</b> Managing the app\'s large volume of user-uploaded images, portfolios, and contests was streamlined using Cloudinary for efficient image handling and AVIF compression.<br><br>' +
                  '<b>➖ Performance:</b>  Lazy loading and image compression improved the app’s performance, making it scalable to accommodate a growing user base without sacrificing speed.',
      technologies: ['NestJS', 'TypeScript', "MySQL", "React", "Socket.io","Firebase"],
    },

    {
      id: 'chess-former',
      title: 'Chess Former',
      thumbnail: "/v1726364275/cover_16x9-1707829224639_pse1mo-removebg-preview_tzdrdr.png",
      brief: 'Strategic puzzle game where players use chess piece movements to eliminate the king, featuring an auto-solve powered by advanced algorithms.',
      introduction: '<b>Chess Former</b> is a strategy game inspired by the original Chess-Former. Players must eliminate the king using chess pieces, with movement restricted by the traditional rules of each piece. The game integrates puzzle-solving mechanics with classic chess strategy.',
      demoUrl: 'https://gitlab.com/the-teachers-public/chess-former/-/raw/main/Chess-Former_Demo.mp4',
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
      id: 'QSmart',
      title: 'QSmart',
      thumbnail: "/v1726800756/thumbnail_sntu4w.png",
      brief: 'Information Retrieval system designed for Q&A datasets, delivering fast and accurate document matching and query ranking.',
      introduction: 'The project focuses on building an efficient Information Retrieval (IR) system using two datasets:<br><b>Antique</b> and <b>Lotte/Science</b>. The aim is to retrieve relevant documents for user queries and rank them based on relevance,' +
        ' utilizing advanced techniques such as word embeddings and vector space models for optimal performance.<br><br> Used Datasets Page <a href="https://ir-datasets.com/" target="_blank"><img src="https://res.cloudinary.com/dxgro47nn/image/upload/v1726801131/OIP_ao2utb.jpg" height="15" width="15" alt="open-link"></a>',
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
      technologies: ['NestJS','TypeScript','Python','ChromaDB','FastAPI'],
    },

    {
      id: 'satellite-simulation',
      title: 'Satellite Simulation',
      thumbnail: "/v1726364210/istockphoto-1208005312-612x612_hkrxiw-removebg-preview_nemcx4.png",
      brief: 'Simulation that models a satellite’s elliptical motion, orbital transitions, and planetary gravitational influences, providing real-time location and speed data.',
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
      id: 'leaf',
      title: 'Leaf',
      thumbnail: "/v1726809009/leaves-green-icon-isolated-on-white-background-free-vector_ea1ffo.png",
      brief: 'Pharmacy management system built with Laravel and Flutter, featuring advanced search, real-time monitoring, and automated reports.',
      introduction: 'This project involved building a comprehensive Pharmacy Management System aimed at streamlining the daily operations of a pharmacy, from inventory management to customer interactions. The system was designed to automate key processes, reduce the workload for pharmacists, and ensure efficiency in managing drug stocks, sales, and purchases.',
      overview: [
        {
          title: 'Project Requirements',
          body:"<b>Backup System:</b>  Implemented a robust backup solution to ensure data integrity and recovery in case of failure.<br>" +
            "<b>Advanced and Fast Search:</b> Developed an optimized search system for efficient querying of the drug inventory and sales data.<br>" +
            "<b>Scalability:</b> Designed the system to handle increasing amounts of data and user interactions without sacrificing performance.<br>" +
            "<b>Export to Excel:</b> Enabled the export of pharmacy and sales information to Excel reports for easy access and analysis.<br>" +
            "<b>Real-Time Employee Monitoring:</b> Built a system to track employee activities and performance statistics in real time.<br>" +
            "<b>Statistics Module:</b> Provided detailed insights into pharmacy operations, including sales trends, stock levels, and employee performance.<br>" +
            "<b>Push Notifications:</b> Created a custom push notification system from scratch to alert users of low stock, expired drugs, and other important updates."
        },
        {
          title:'Technology Stack',
          body: '<b>Backend:</b> Laravel (PHP) with Eloquent ORM for managing data models and database operations.<br>' +
            '<b>Frontend:</b> Flutter (Dart) for building a responsive, mobile-friendly interface.<br>' +
            '<b>Database:</b> MySQL for handling all data related to inventory, sales, employees, and notifications.'
        },
        {
          title: 'Features and Modules',
          body: '<b>Inventory Management:</b> Automated tracking of stocks with real-time updates, alerts for low stock and expired products.<br>' +
            '<b>Sales & Return Module:</b> Manage transactions, returns, and generate detailed invoices.<br>' +
            '<b>User Management:</b> Admin can add employees, set permissions, and monitor login activities.<br>' +
            '<b>Reports & Analytics:</b> Export sales and inventory data to Excel and provide detailed statistical insights.<br>' +
            '<b>Real-Time Notifications:</b> Notify users of important pharmacy updates, such as low stock levels or expiring medications.<br>'

        }
      ],
      technologies: ['Laravel', 'PHP', "MySQL"],
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
