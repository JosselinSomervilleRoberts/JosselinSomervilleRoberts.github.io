new Vue(
  {
    el: '#app_component',
    data: {
      name: 'Josselin Somerville Roberts',
      title: 'M.S. Student in CS @ Stanford (2024), Ecole Polytechnique (X19), ex Google and NVIDIA Intern, Nation-wide CPGE (PT) Valedictorian (2019)',
      image: 'images/josselin.jpg',
      linkedinusername: 'josselin-somerville-roberts',
      email: 'josselin at stanford dot edu',
      stanfordprofile: 'https://profiles.stanford.edu/josselin-somerville-roberts',
      githubusername: 'JosselinSomervilleRoberts',

      introitems: [
        'I am a current Master\'s student in Computer Science (AI Track) at Stanford University, where I am advised by <a href="https://profiles.stanford.edu/christopher-gregg" target="blank">Christopher Gregg</a>. I graduated in 2022 from Ecole Polytechnique (France) where I obtained my Engineering degree (M.S. equivalent) in Computer Science and Applied Mathematics (Image, Vision, and Learning track). Before that I followed the French CPGE system (PT) at Lycée Jean-Baptiste Say (France), where I graduated as <a href="https://www.banquept.fr/2019_result/resultats_concours.php">valedictorian</a> (2500 candidates) in 2019.',
        'I am interested in the intersection of machine learning and robotics, and in particular in the application of deep learning to robotics. This includes Computer Vision, Reinforcement Learning and also Natural Language Processing.',
        'I currently work at the <a href="https://crfm.stanford.edu/">Stanford CRFM (Center for Research on Foundation Models</a> on the <a href="https://github.com/stanford-crfm/helm">HELM project</a> under the supervision of <a href="https://cs.stanford.edu/~pliang/">Percy Liang</a>.',
      ],

      portfoliorows: [
        {
          id: 1,
          name: 'Robotics',
          items: [
            {
              id: 0,
              title: 'Chemist robot arm',
              description: 'I built a robot arm to pickup and pour beakers into other beakers.',
              image: 'images/projects/robot arm/display.png',
            },
            {
              id: 1,
              title: 'Mr. Resiskers',
              description: 'A robot cat that conforts the user through a series of multi-modal, two-way interactions',
              image: 'images/projects/mr resiskers/display.jpg',
              descriptionlist: [
                'This was the final project of ME218A - Smart Product design. You can find the dedicated website <a href="https://sites.google.com/stanford.edu/mrresiskers">here</a>.',
                '<img src="images/projects/mr resiskers/display.png" class="img-fluid">',
              ],
            },
            {
              id: 2,
              title: 'Laser Tag equipment',
              description: 'Since everything was closed during quarantine, I built my own laser tag equipment from scratch.',
              image: 'images/projects/laser game/target.JPG',
              repo: 'LaserGame',
              descriptionlist: [
                'First, I conducted dozens of tests to see if it was possible to send data via infrared signals using a lens at a long distance. After many experiments, I designed an IR receiver that would not only turn off when hit by the gun but would also notify by Wifi the gun that had fired that it had hit its target.',
                'Then I integrated different buttons to the gun for scores, sound, an aiming laser, and a communication network so that every gun can communicate with its targets and the other guns',
                'After quite some work, I was finally able to build two test sets and it was a success. It was time to build the entire 8 sets (8 guns, 16 targets) that I wanted. As a reference, the 3D printing took nearly two months while printing 24/7.',
                '<img src="images/projects/laser game/construction.jpg" class="img-fluid">',
                `<div class="row">
                      <div class="col-md-6">
                          <a href="#"><img src="images/projects/laser game/gun_solidworks.jpg" class="img-fluid" /></a>
                      </div>
                      <div class="col-md-6">
                          <a href="#" ><img src="images/projects/laser game/gun.jpg" class="img-fluid" /></a>
                      </div>
                  </div>`,
                'At the same time, I designed custom PCBs for the targets, the guns, and even a charger (to charge all 24 devices at the same time).',
                '<img src="images/projects/laser game/circuits_combined.JPG" class="img-fluid">',
                '<img src="images/projects/laser game/gun_open.jpg" class="img-fluid">',
                'After months of sanding, painting, assembling, and coding, I now have 8 laser tag sets to play with!',
                '<img src="images/projects/laser game/playing.JPG" class="img-fluid">',
                '<img src="images/projects/laser game/target.JPG" class="img-fluid">',
                '<img src="images/projects/laser game/target_blue.jpg" class="img-fluid">',
              ]
            },
            {
              id: 3,
              title: 'Hexapod - Bob v3',
              description: 'After Bob v2, I was more than ever motivated to build a working hexapod!',
              image: 'images/projects/bob v3/back.jpg',
              descriptionlist: [
                'As I had learned with Bob v2, I needed to conduct many experiments to validate the new leg design I came up with before starting to print the other legs.',
                'I decided to use more expensive motors that were more reliable and easier to communicate with as they used bus communication.',
                'To be sure that I had properly tested the leg, I decided to code every single feature that I wanted Bob v3 to have on the test leg. This included inverse kinematics, motion control with feedback, control of temperature and intensity, and more.',
                'I also conducted many tests to validate the motor I was using such as torque and speed measurement, long use to check the durability and even motion analysis.',
                '<img src="images/projects/bob v3/leg.jpg" class="img-fluid">',
                'After a few months, I had conducted every single test that I could think of and coded every feature imaginable. I also made several variations to improve the print quality without compromising the speed of the print.',
                'Therefore I was confident that this time my design could work, and I started to buy components and print pieces.',
                'This process took nearly five weeks and as I wanted to have a good-looking robot, I also had to sand and paint pieces. Since there are nearly 70 pieces, it added a lot of work but it was worth it!',
                '<img src="images/projects/bob v3/painting.jpg" class="img-fluid">',
                '<img src="images/projects/bob v3/pieces.jpg" class="img-fluid">',
                'Once the robot was assembled, I could already feel that it was much stronger than Bob v2 which had some weak spots.',
                'The only thing left was to build the circuit for the microcontroller and to program it. Again, I used an Arduino.',
                '<img src="images/projects/bob v3/circuit.jpg" class="img-fluid">',
                'It was finally time to code how the robot could move. After months of designing and building, I thought that the end of the journey was close.',
                'This was without taking into account a faulty battery that short-circuited the entire system upon recharging, burning many parts. After this incident, I had to take a break from the project, exhausted and without a clue on how to repair Bob.',
                'A few weeks later, I decided that I wanted to finish this project so I started to look for the source of the short-circuit. After days of measuring conductivity, trying to control individually each motor, and swapping components, I was able to identify the battery as the source of the problem and the components it had burnt. I bought a new battery and Bob was up and working again :',
                '<img src="images/projects/bob v3/back.jpg" class="img-fluid">',
                'During the next few months, I added different functionalities.',
                'I first started with different modes that the person controlling Bob could choose. Below, you can see first Bob in his high-speed mode with a body really low and legs moving super fast. Then, the second picture shows Bob in his climbing mode, going super slow with legs lifting up to nearly 12 cm.',
                '<img src="images/projects/bob v3/gait1.jpg" class="img-fluid">',
                '<img src="images/projects/bob v3/gait2.jpg" class="img-fluid">',
                'Finally, I added a mode to control the movement of the body in every single degree of freedom possible. This was to showcase what Bob v3 was capable of.',
                '<img src="images/projects/bob v3/movement.jpg" class="img-fluid">',
                'And to be sure that I could transport it without damaging it, I built Bob a suitcase.',
                '<img src="images/projects/bob v3/rangement.jpg" class="img-fluid">',
              ],
            },
            {
              id: 4,
              title: 'Hexapod - Bob v2',
              description: 'After building Bob v1, I fell in love with walking robots. However it had many flaws, so I made Bob v2.',
              image: 'images/projects/bob v2/solidworks.JPG',
              descriptionlist: [
                'Bob v1 had many problems, mainly stability issues. As it had only four legs, it was only possible to move one leg at a time to keep a good balance. With the addition of a small weight, it was even needed to shift the body to ensure that the center of gravity stayed between the points of support. This was not good enough for me, so I decided to build a new Bob, this time featuring six legs.',
                'For this second version, I was able to reuse the simulations programmed for Bob v1, therefore most of the work was designing and building the robot.',
                '<img src="images/projects/bob v2/solidworks.JPG" class="img-fluid">',
                'In addition to the fact that Bob v2 had six legs, I wanted to add more features to have more stability and adaptation to the terrain.',
                'To do so, I designed a force sensor in the last phalange of each leg. I wanted to be able to detect precisely when a leg hit the ground. With precise force measurement, it would even be possible to determine if the leg of the robot is well distributed and if not how to shift the body to correct that.',
                'However, as I had to use cheap pressure sensors, I often got values even when no pressure was being applied due to the leg movement. Therefore, I created a mechanism that separated the end of the leg and the sensor if the pressure was too weak, thanks to springs separating the two.',
                'Below, you\'ll find two pictures of the mechanism with a contact and then without :',
                '<img src="images/projects/bob v2/phal3_fermee.png" class="img-fluid">',
                '<img src="images/projects/bob v2/phal3_ouverte.png" class="img-fluid">',
                'After many successful experiments, I decided to start the building process.',
                'I bought my own 3D printer and this was my first experience printing hundreds of pieces. I first started by building a prototype leg :',
                '<img src="images/projects/bob v2/leg_combined.JPG" class="img-fluid">',
                'The lag mechanically worked very well, so I decided to start to print every single piece for the robot. At the same time, I learned to design my own PCBs and getting them manufactured. After a lot of welding, I ended up with a working PCB handling the control of 18 motors, reading signals from 18 position sensors and 6 force sensors, controlling nearly 80 RGB LEDs, transforming high current-voltage (up to 10A), and communication via WiFi and Bluetooth.',
                '<img src="images/projects/bob v2/circuit.jpg" class="img-fluid">',
                'Unfortunately, after printing and assembling the robot, I discovered many show-stopping problems.',
                'First, one major problem was the motors I used. As I needed 18 motors and had no financial support, I chose some really cheap motors from China that did not work reliably and didn\'t respect the specifications given by the vendor.',
                'Secondly, as it was one of my first experiences with 3D printing, I had made some bad design choices that lead to weak pieces because of hard shapes to print.',
                'Lastly, I had tried to integrate too many features into one robot. As an example, a major part of the circuit was to control the RGB lights on each phalange which were only there to look good.',
                'Even though, Bob v2 never did more than crawling with few legs I learned a lot through this project. I knew that I had to do more tests before rushing into building the entire thing. I also needed to learn how to design simpler pieces to make the 3D printing process easier and also to redefine the "real" requirements of the robot to avoid unnecessary complications.',
                'I was more than ever motivated to start a new robot to use the knowledge I had acquired and that is why I started building Bob v3.'
              ],
            },
            {
              id: 5,
              title: 'Walking robots',
              description: 'This project aimed to compare the performances of a fully articulated robot to Klann\'s gait mechanism.',
              image: 'images/projects/bob v1/side.jpg',
              descriptionlist: [
                'During my first year of undergraduate studies, I started working on walking robots.',
                'These were the first "real" robots I built and I wanted to compare two different approaches: many degrees of freedom mechanisms versus gait generation mechanisms (such as the Klann mechanism).',
                '<b>Quadruped robot - Bob v1</b>',
                'As this was my first robot, I did not design it. (you can find the files here: https://www.thingiverse.com/thing:1009659)',
                'However, I build it on my own and decided to create my own circuit and Arduino program for it (similar to C++ code).',
                '<img src="images/projects/bob v1/side.jpg" class="img-fluid">',
                'Even before beginning to build the robot, I coded some simulations in Python to compute various metrics such as the torque in each joint, the energy used, the robot speed, and even the maximal charge carryable.',
                'This helped me to find a gait to minimize the energy used under certain constraints imposed by the system such as the maximal torque of the motors.',
                'Later, with these simulations, I was able to compute optimal dimensions for the various sections composing a leg and the body.',
                '<img src="images/projects/bob v1/combined_simulation.JPG" class="img-fluid">',
                'Then, to avoid any damage to the robot, I coded from scratch a graphical simulation in Python to visualize a gait before really trying it out.',
                'In fact, the previous "stick" simulation did not take into account the width of each phalange which could, unfortunately, hit each other.',
                'To prevent any accident, I coded this simulation so I could see the movement of each piece and validate a movement before trying it out on the real robot.',
                '<img src="images/projects/bob v1/combined_simulation2.JPG" class="img-fluid">',
                'Here are a few pictures of the robot constructed :',
                '<img src="images/projects/bob v1/side.jpg" class="img-fluid">',
                '<img src="images/projects/bob v1/top.jpg" class="img-fluid">',
                '<img src="images/projects/bob v1/front.jpg" class="img-fluid">',
                '<b>Gait transformation robot - KlannBot</b>',
                'In parallel with the development of Bob v1, I designed from scratch KlannBot, a robot using Klann\'s mechanism. The approach is totally different as the gait transformation allows to use of only two motors in order to have eight legs in comparison to the twelve required for four legs for Bob. However, the gait can not be adapted as it is imposed by the dimensions of the connecting rods of the system.',
                'After studying Klann\'s mechanism, I designed a robot using it with always four legs on the floor to ensure stability.',
                'Just like Bob v1, before designing the robot, I simulated the mechanism to test its performance. As the gait of the leg highly depends on the different lengths of each connecting rod, I decided to build an evolutionary algorithm to find optimal lengths under constraints. The aim was to find a gait with the longest advancement while moving the leg over a given height (to avoid obstacles) with a maximal torque determined by the motors used.',
                '<img src="images/projects/klannbot/schema2.JPG" class="img-fluid">',
                '<img src="images/projects/klannbot/schema.JPG" class="img-fluid">',
                'Once the optimal parameters were found, I designed the robot on Solidworks, 3D printed it, and build it. Here is how it looks :',
                '<img src="images/projects/klannbot/side.jpg" class="img-fluid">',
                '<img src="images/projects/klannbot/top.jpg" class="img-fluid">',
                '<img src="images/projects/klannbot/front.jpg" class="img-fluid">',
              ],
            },
            {
              id: 6,
              title: 'PCB 2D Plotter',
              description: 'This project aimed to build a 2D plotter to draw PCBs.',
              image: 'images/projects/the drawer/pcb.png',
            }
          ],
        },
        {
          id: 2,
          name: 'Machine Learning',
          items: [
            {
              id: 101,
              title: 'NASA Reachbot cracks segmentor',
              description: 'A computer vision project to enable NASA\'s Reachbot robot to detect cracks and edges on which to hold. Paper in review for WACV 2023.',
              image: 'images/projects/reachbot/display.png',
              descriptionlist: [
                'In this project we trained several VIT-based model to segment cracks and edges.',
                'The first step was to gather some data as no such data was puclicly available. We gathered 100 images from places like Pinnackles National Park, Monument Valley and the Grand Canyon. In addition, we generated 150 images with DALL-E 2 to increase the diversity',
                'TODO IMAGE DATASET',
                'We manually labeled this data to form a training dataset (150 generated images and 50 real images) and a validation dataset (50 real images).',
                'TODO IMAGE LABELED',
                'To have an idea of how sujective this task is we evaluated some humas on the validation dataset who only scored 35% on the DICE metric.',
                'This also showed the fact that classical COmputer Vision metric were not appropriate in our case. In fact the width of a crack is often very subjective however we are intersted in the correct positioning of the crack. Both play a role as important in the DICE metric. This is why we introduced 3 new metrics: skeleton-distance, skeletion-width, skeleton-length, all base on a skeletonization of the crack.',
                'TODO IMAGE SKELETON',
                'We trained various VIT-based model and introduced a new loss: SKIL (Skeleton Intersection Loss) based on a smooth skeletonization (backpropageble) algorithm introduced by the CL-DIce paper.',
                'Not-only our model outperformed the humans, we also showed that our loss was performing better that any other common loss.'
              ],
              repo: 'Reachbot-Predictor'
            },
            {
              id: 8,
              title: 'Multi-task NLP',
              description: 'Using a single BERT model to perform multiple NLP tasks.',
              image: 'images/projects/multi_task_nlp/display.jpg',
              repo: 'CS224N-Project-BERT-MultiTask'
            },
            {
              id: 9,
              title: 'RL for cleaning streets',
              description: 'Using a Deep Reinforcement Learning algorithm to train a robot to clean parking lots.',
              image: 'images/projects/rl_streets/display.png',
              repo: 'AA228-Project-Autonomous-Vehicle'
            },
            {
              id: 10,
              title: 'Blackjack counting cards RL agent',
              description: 'Using a Reinforcement Learning algorithm to count cards in Blackjack.',
              image: 'images/projects/blackjack/display.jpg',
              repo: 'BlackJackCountingEnv'
            },
            {
              id: 11,
              title: 'Starcraft AI',
              description: 'Using Behaviour Trees to create an AI for Starcraft with BWAPI.',
              image: 'images/projects/starcraft/display.jpg',
              repo: 'StarcraftAI'
            },
            {
              id: 12,
              title: 'RL agents for Ultimate Tic Tac Toe',
              description: 'Using various Reinforcement Learning algorithms to train an AI to play Ultimate Tic Tac Toe.',
              image: 'images/projects/ultimate_tic_tac_toe/ultimate tic tac toe.png',
              repo: 'UltimateTicTacToe-RL'
            },
            {
              id: 13,
              title: 'H-index prediction',
              description: 'Using a co-citation network and abstracts to predict the H-index of a researcher.',
              image: 'images/projects/hindex/display.ppm',
              repo: 'CS224W-Project-H-Index'
            },
            {
              id: 14,
              title: 'Auto Speech Bubbles',
              description: 'Places speech bubble for TV-shows without obstructing the face of the characters.',
              image: 'images/projects/speech_bubbles/display.png',
              repo: 'SpeechBubbleSubtitles'
            },
            {
              id: 15,
              title: 'Airbus Ship Detection',
              description: 'Using a Convolutional Neural Network to detect ships in satellite images.',
              image: 'images/projects/airbus detection/Predicted_4.png',
            },
            {
              id: 16,
              title: 'CG:Shop 2021: Coordinated Motion Planning',
              description: 'Determining paths for robots moving on the same map.',
              image: 'images/projects/cgshop/display.jpg',
              repo: 'robotsCGShop2021'
            }
          ],
        },

        {
          id: 3,
          name: '3D Rendering, Animation and Games',
          items: [
            {
              id: 17,
              title: 'Fast Ocean waves',
              description: 'Using noise superposition computed on the GPU to render realistic ocean waves.',
              image: 'images/projects/ocean_waves/final_result.PNG',
              repo: 'ProjectOcean'
            },
            {
              id: 18,
              title: 'Screen Space Reflections',
              description: 'Implemented a renderer with Screen Space Reflections and Ray Tracing.',
              image: 'images/projects/ssr/final_ssr.PNG',
              repo: 'MyOpenGlRenderer',
            },
            {
              id: 19,
              title: 'Echo\'s Adventure',
              description: 'An interactive world coded from scratch in C++ using OpenGL.',
              image: 'images/projects/echos adventure/echos_adventure.JPG',
            },
            {
              id: 20,
              title: 'Pokemon Mystery Dungeon - Remake',
              description: 'As a fan of Pokemon Mystery Dungeon, I decided to implement my own adaptation of the game using Python and Pygame.',
              image: 'images/projects/pokemon/Capture.JPG',
            },
            {
              id: 21,
              title: 'Multiplayer game: Magic Arena',
              description: 'During my last year of high school, I wanted to learn C++, so I decided to challenge myself to build from scratch an arena game.',
              image: 'images/projects/magic arena/image 1.png',
            },
          ],
        },

        {
          id: 4,
          name: 'Other',
          items: [
            {
              id: 22,
              title: 'Cemantix - Remake',
              description: 'Guess the word of the day given the semantic similarity with other words.',
              image: 'images/projects/SemApi/display.jpg',
              repo: 'SemAPI'
            },
            {
              id: 23,
              title: 'Mechanical Analysis of 3D printed infills',
              description: 'Using Finite Element Analysis to determine the best infill pattern for 3D printed parts.',
              image: 'images/projects/3d_printing/display.jpg',
            },
            {
              id: 24,
              title: 'Procedural dialog generation',
              description: 'As a team of 5 students, we realized a research project during a year to procedurally generate dialogs between two Non-Play Characters (NPC).',
              image: 'images/projects/psc/graphe.png',
            },
          ],
        },

      ],

      jobitems: [
        {
          id: 0,
          title: 'Youtube',
          subtitle: 'Machine Learning Intern',
          description: 'I will be working in the Content ID team to work on state-of-the-art Computer Vision algorithms in order to detect copyright infringements.',
          image: 'images/youtube.jpg',
          dates: '(Future) September 2023 - December 2023',
          link: 'https://www.youtube.com/watch?v=9g2U12SsRns',
          location: 'Zurich, Switzerland',
        },
        {
          id: 1,
          title: 'Nvidia',
          subtitle: 'Machine Leaning Intern',
          description: 'I will be working in the Computer Vision team for autonomous driving. My goal will be to add a new feature to the existing pipeline.',
          image: 'images/nvidia.png',
          dates: '(Future) June 2023 - September 2023',
          link: 'https://www.nvidia.com/en-us/self-driving-cars/',
          location: 'Santa Clara, CA',
        },
        {
          id: 2,
          title: 'Stanford CRFM',
          subtitle: 'Research Assistant',
          description: 'I am working on the HELM project. The goal of HELM is to provide a unified framework to evalute foundation models.',
          image: 'images/crfm.jpg',
          dates: 'April 2023 - Present',
          link: 'https://crfm.stanford.edu/',
          location: 'Stanford, CA',
        },
        {
          id: 3,
          title: 'Stanford Deliberation Platform',
          subtitle: 'Research Assistant',
          description: 'This is a video discussion platform for small groups of people designed to facilitate a structured and equitable conversation with better opportunity for participants to speak up',
          image: 'images/stanford.jpg',
          dates: 'January 2023 - March 2023',
          link: 'https://stanforddeliberate.org',
          location: 'Stanford, CA',
        },
        {
          id: 4,
          title: 'Google',
          subtitle: 'Research Engineer Intern',
          description: 'I worked in the Vehicle Routing team (OR-Tools) to integrate traffic data into the existing VRP solver. This project necessitated the elaboration of a new piece-wise regression algorithm as well as many heuristics.',
          image: 'images/google.png',
          dates: 'April 2022 - August 2022',
          link: 'https://developers.google.com/optimization/routing/vrp',
          location: 'Paris, France',
        },
        {
          id: 5,
          title: 'Zelros',
          subtitle: 'Software Engineer Intern',
          description: 'I worked on the development of a secure widget for insurers to integrate Zelros\'s AI into their websites. In addition I created an admin dashboard to manage the widget\'s configuration.',
          image: 'images/zelros.jpg',
          dates: 'June 2021 - September 2021',
          link: 'https://www.zelros.com/',
          location: 'Paris, France',
        },
        {
          id: 6,
          title: 'Poligma',
          subtitle: 'Software Engineer Intern',
          description: 'I built data ingestion pipelines for the public institution INSEE with some custom ETLs. I also developed an algorithm to approximately increase the granularity of geolocated data.',
          image: 'images/poligma.jpg',
          dates: ' March 2020 - April 2020',
          link: 'https://www.poligma.com/',
          location: 'Montpellier, France',
        },
      ],

      educationitems: [
        {
          id: 0,
          title: 'Stanford',
          subtitle: 'M.S in Computer Science',
          description: 'Artificial intelligence Track<br/><b>GPA: 4.05</b>',
          image: 'images/stanford.jpg',
          dates: '2022 - Present',
          link: 'https://cs.stanford.edu/',
          location: 'Stanford, CA',
        },
        {
          id: 1,
          title: 'Ecole Polytechnique',
          subtitle: 'Engineering diploma<br/>(M.S + B.S. equivalent)',
          description: 'Image, Vision and Machine Learning<br/><b>GPA: 3.93</b>',
          image: 'images/polytechnique.jpeg',
          dates: '2019 - 2022',
          link: 'https://www.polytechnique.edu/en',
          location: 'Palaiseau, Franche',
        },
        {
          id: 2,
          title: 'Lycée Jean-Baptiste Say',
          subtitle: 'PTSI/PT* (French CPGE)',
          description: '2 years of intensive preparation for the French engineering school entrance exams (undergraduate level).<br/><b>GPA: 4.00</b>',
          image: 'images/jbs.jpeg',
          dates: '2017 - 2019',
          link: 'http://lyc-jb-say.scola.ac-paris.fr/wa_38.html',
          location: 'Paris, Franche',
        }
      ],
    },
  });