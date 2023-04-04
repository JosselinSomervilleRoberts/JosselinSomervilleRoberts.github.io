new Vue(
    {
        el: '#app_component',
        data: {
            name: 'Josselin Somerville Roberts',
            title: 'M.S. Student in CS @ Stanford (2024), Ecole Polytechnique (X19), ex Google Intern, Nation-wide CPGE (PT) Valedictorian (2019)',
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
                id: 0,
                name: 'Banena',
                items: [
                {
                  id: 0,
                  title: 'Neural Model Library',
                  description: 'Simple creation of feed forward and recurrent neural models in TensorFlow.',
                  image: 'images/neural_model.png',
                  repo: 'SpeechBubbleSubtitles',
                  descriptionlist: [
                    'Supports feed forward and recurrent neural models. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliqua',
                    'Supports feed forward and recurrent neural models. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliqua',
                    '<img src="images/neural_model.png" alt="Neural Model" class="img-fluid portfolio-img">',
                    'Test lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam u',
                  ]
                },
                {
                  id: 1,
                  title: 'NN Trainer Library',
                  description: 'A library for automatic supervised training of neural models.',
                  image: 'images/nn_trainer.png',
                  repo: 'SpeechBubbleSubtitles',
                },
              ],
            }
            ,
            {
              id: 1,
              name: 'Robotics',
              items: [
              {
                id: 2,
                title: 'Laser Tag equipment',
                description: 'Since everything was closed during quarantine, I decided to build my own laser tag equipment from scratch.',
                image: 'images/projects/laser game/target.JPG',
                repo: 'LaserGame',
                descriptionlist: [
                  'First, I conducted dozens of tests to see if it was possible to send data via infrared signals using a lens at a long distance. After many experiments, I designed an IR receiver that would not only turn off when hit by the gun but would also notify by Wifi the gun that had fired that it had hit its target.',
                  'Then I integrated different buttons to the gun for scores, sound, an aiming laser, and a communication network so that every gun can communicate with its targets and the other guns',
                  'After quite some work, I was finally able to build two test sets and it was a success. It was time to build the entire 8 sets (8 guns, 16 targets) that I wanted. As a reference, the 3D printing took nearly two months while printing 24/7.',
                  '<img src="images/projects/laser game/construction.jpg" alt="Neural Model" class="img-fluid">',
                  'At the same time, I designed custom PCBs for the targets, the guns, and even a charger (to charge all 24 devices at the same time).',
                  `<div class="row">
                  <div class="col-md-6">
                      <a href="#"><img src="images/projects/laser game/construction.jpg" alt="inn_logo" class="img-fluid" /></a>
                  </div>
                  <div class="col-md-6">
                      <a href="#" ><img src="images/projects/laser game/construction.jpg" alt="ccs_logo"  class="img-fluid"/></a>
                  </div>
              </div>`,
                  'After months of sanding, painting, assembling, and coding, I now have 8 laser tag sets to play with!',
                ]
              },
              {
                id: 1,
                title: 'NN Trainer Library',
                description: 'A library for automatic supervised training of neural models.',
                image: 'images/nn_trainer.png',
                repo: 'SpeechBubbleSubtitles',
              },
            ],
          }
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
                  id: 7,
                  title: 'Stanford',
                  subtitle: 'M.S in Computer Science',
                  description: 'Artificial intelligence Track<br/><b>GPA: 4.05</b>',
                  image: 'images/stanford.jpg',
                  dates: '2022 - Present',
                  link: 'https://cs.stanford.edu/',
                  location: 'Stanford, CA',
                },
                {
                  id: 8,
                  title: 'Ecole Polytechnique',
                  subtitle: 'Engineering diploma<br/>(M.S + B.S. equivalent)',
                  description: 'Image, Vision and Machine Learning<br/><b>GPA: 3.93</b>',
                  image: 'images/polytechnique.jpeg',
                  dates: '2019 - 2022',
                  link: 'https://www.polytechnique.edu/en',
                  location: 'Palaiseau, Franche',
                },
                {
                  id: 9,
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