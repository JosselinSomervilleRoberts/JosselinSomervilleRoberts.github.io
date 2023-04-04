new Vue(
    {
        el: '#app_component',
        data: {
            name: 'Josselin Somerville Roberts',
            title: 'M.S. Student in CS @ Stanford, Ecole Polytechnique (X19), ex Google Intern, Nation-wide CPGE (PT) Valedictorian (2017)',
            image: 'images/josselin.jpg',
            linkedinusername: 'josselin-somerville-roberts',
            email: 'josselin at stanford dot edu',
            stanfordprofile: 'https://profiles.stanford.edu/josselin-somerville-roberts',
            githubusername: 'JosselinSomervilleRoberts',

            introitems: [
                'I am a Master\'s student in Computer Science at Stanford University, where I am advised by <a href="https://profiles.stanford.edu/sergey-levine" target="blank">Sergey Levine</a> and <a href="https://profiles.stanford.edu/jean-claude-latombe" target="blank">Jean-Claude Latombe</a>.',
                'I am interested in the intersection of machine learning and robotics, and in particular in the application of deep learning to robotics.',
                'I am also interested in the intersection of machine learning and natural language processing, and in particular in the application of deep learning to natural language processing.',
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

              timelineitems: [
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