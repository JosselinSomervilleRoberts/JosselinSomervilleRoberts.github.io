Vue.component(
    'intro',
    {
        props: {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            githubusername: {
                type: String,
                required: true,
            },
            linkedinusername: {
                type: String,
                required: true,
            },
            stanfordprofile: {
                type: String,
                required: false,
            },
            email: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            items: {
                type: Array,
                required: true,
            }
        },
        template:
            `<section class="content-section" style="background:#edeeef; padding-top: 9rem; padding-bottom: 0rem">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-lg-4">
                  <div class="team-member" style="margin-bottom:24px">
                    <img :src="image" style="border:8px solid white; width:350px!important; height:100%" class="img-responsive img-circle" alt="Josselin Somerville">
                    <div id="social1" class="mt-4">
                      <ul class="list-inline social-buttons">
                        <li class="text-center">
                          <a :href="'https://www.linkedin.com/in/' + linkedinusername" target="blank"><i class="fa fa-linkedin"></i></a>
                        </li>
                        <li class="text-center">
                          <a :href="'https://github.com/' + githubusername" target="blank"><i class="fa fa-github"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-8" id="intro-section" style="margin-bottom: 1rem; margin-top:1rem">
                  <h4>{{name}}</h4>
                  <p class="lead"><b>{{title}}</b></p>
                  <p class="lead" style="font-size: 14pt" v-for="item in items" v-html="item"></p>
                  <div id="social2" class="mt-4">
                      <ul class="list-inline social-buttons">
                        <li class="text-center">
                          <a :href="'https://www.linkedin.com/in/' + linkedinusername" target="blank"><i class="fa fa-linkedin"></i></a>
                        </li>
                        <li class="text-center">
                          <a :href="'https://github.com/' + githubusername" target="blank"><i class="fa fa-github"></i></a>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
            
          </section>`,
    },
);