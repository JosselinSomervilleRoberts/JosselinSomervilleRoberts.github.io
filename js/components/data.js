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
                'I currently work at the <a href="https://crfm.stanford.edu/">Stanford CRFM (Center for Research on Foundation Models</a> on the <a href="https://github.com/stanford-crfm/helm">HELM project</a> under the supervision of <a href="https://cs.stanford.edu/~pliang/>Percy Liang</a>',
            ],

            portfoliorows: [
              {
                id: 0,
                name: 'Robotics',
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
              name: 'Banana',
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
          ],

              jobitems: [
                {
                  id: 0,
                  title: 'Google',
                  subtitle: 'Software Engineer',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl.',
                  image: 'images/google_square.png',
                  dates: '2019 - Present',
                  link: 'https://www.google.com/',
                  location: 'Mountain View, CA',
                },
                {
                  id: 1,
                  title: 'University of Toronto',
                  subtitle: 'PhD in Computer Science',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl.',
                  image: 'images/google_square.png',
                  dates: '2014 - 2019',
                  link: 'https://www.utoronto.ca/',
                  location: 'Toronto, ON',
                }
              ],

              educationitems: [
                {
                  id: 0,
                  title: 'Google',
                  subtitle: 'Software Engineer',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl.',
                  image: 'images/google_square.png',
                  dates: '2019 - Present',
                  link: 'https://www.google.com/',
                  location: 'Mountain View, CA',
                },
                {
                  id: 1,
                  title: 'University of Toronto',
                  subtitle: 'PhD in Computer Science',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl eget nisl.',
                  image: 'images/google_square.png',
                  dates: '2014 - 2019',
                  link: 'https://www.utoronto.ca/',
                  location: 'Toronto, ON',
                }
              ],
        },
    });