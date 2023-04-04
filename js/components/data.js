new Vue(
    {
        el: '#app_component',
        data: {
            githubusername: 'JosselinSomervilleRoberts',
            portfolioitems: [
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