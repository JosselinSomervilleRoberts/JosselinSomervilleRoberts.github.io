// List of to do items (accepts an array as props)
Vue.component(
    'portfolio',
    {
        props: ['items'],
        template:
            `<section class="content-section" id="projects">
                <div class="container">
                    <div class="content-section-heading text-center">
                        <h3 class="text-secondary mb-0">Portfolio</h3>
                        <h2 class="mb-2">Personal Projects</h2>
                    </div>
                    <div class="container text-center mb-5">
                        <p class="lead">Here you can see some of the projects I've done on my own time.</p>
                        <p class="lead">(Somewhat outdated, will update soon. Grad student life is very busy!)</p>
                    </div>
                    <div class="row no-gutters" id="app_basic">
                        <portfolio-item
                        v-for="item in items"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                        :description="item.description"
                        :image="item.image"
                        ></portfolio-item>
                    </div>
                </div>
            </section>`,
    },
);

// Renderer for each to do item (accepts one item as props)
Vue.component(
    'portfolio-item',
    {
        props: {
            id: {
              type: Number,
              required: true
            },
            title: {
              type: String,
              required: true
            },
            description: {
              type: String,
              required: true
            },
            image: {
              type: String,
              required: true
            }
          },
        template:
            `<template>
            <div class="col-lg-4">
              <a class="portfolio-item" :href="'#portfolioModal' + id" data-toggle="modal">
                <span class="caption">
                  <span class="caption-content">
                    <h4>{{title}}</h4>
                    <p class="mb-0">{{description}}</p>
                  </span>
                </span>
                <img class="img-fluid portfolio-img" :src="image" :alt="title">
              </a>
            </div>
          </template>`
    },
);

// Setup the data for the to do list (and and attach to index.html)
new Vue(
    {
        el: '#app_component',
        data: {
            portfolioItems: [
                {
                  title: 'Neural Model Library',
                  description: 'Simple creation of feed forward and recurrent neural models in TensorFlow.',
                  image: 'images/neural_model.png',
                },
                {
                  title: 'NN Trainer Library',
                  description: 'A library for automatic supervised training of neural models.',
                  image: 'images/nn_trainer.png',
                },
              ],
        },
    });