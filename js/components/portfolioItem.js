Vue.component(
  'portfolio-item',
  {
    props: {
      githubusername: {
        type: String,
        required: false
      },
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
      },
      repo: {
        type: String,
        required: false
      },
      descriptionhtml: {
        // type: String,
        required: false
      },
      descriptionlist: {
        // type: Array,
        required: false
      },
      pdf: {
        // type: String,
        required: false
      },
      pdf_text: {
        // type: String,
        required: false
      },
    },
    template:
      `<div  class="col-lg-4">
            
              <!-- Modal -->
              <div class="portfolio-modal modal fade" :id="'portfolioModal' + id" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                      <div class="lr">
                        <div class="rl"></div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-10 mx-auto">
                          <div class="modal-body">
                            <h2 class="text-primary">{{title}}</h2>
                            <p class="lead portfolio-item-description">{{description}}</p>
                            <div v-if="descriptionhtml" v-html="descriptionhtml"></div>
                            <div v-if="descriptionlist">
                              <p class="lead portfolio-item-paragraph" v-for="item in descriptionlist" v-html="item"></p>
                            </div>
                            <div class="lead mb-4" v-if="githubusername && repo">
                              <b>View this project on GitHub: </b>
                              <a :href="'https://github.com/' + githubusername + '/' + repo" target="blank">https://github.com/{{githubusername}}/{{repo}}</a>
                              <iframe class="mt-2" :src="'http://lab.lepture.com/github-cards/card.html?user=' + githubusername + '&amp;repo=' + repo" frameborder="0" scrolling="0" width="400" style="max-width: 70vw" height="180" allowtransparency="true"></iframe><br>
                            </div>
                            <div cv-if="pdf && pdf_text && pdf_text != ''">
                              <p class="lead portfolio-item-paragraph">{{pdf_text}}: <a href="{{pdf}}">here</a></p>
                            </div>
                            <a class="btn btn-dark btn-l" data-dismiss="modal" href="#">
                              <i class="fa fa-times"></i> Close Project</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Portfolio item -->
              <div>
                <a class="portfolio-item" :href="'#portfolioModal' + id" data-toggle="modal">
                  <span class="caption">
                    <span class="caption-content">
                      <h4 class="text-secondary">{{title}}</h4>
                      <p class="mb-0">{{description}}</p>
                    </span>
                  </span>
                  <img class="img-fluid portfolio-img" :src="image" :alt="title">
                </a>
              </div>
            
            </div>`
  },
);