Vue.component(
    'portfolio-row',
    {
        props: {
            name: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                required: true,
            },
            githubusername: {
                type: String,
                required: false,
            }
        },
        template:
            `<div class="portfolio-row">
                    <div class="content-section-heading">
                        <h3 class="text-primary mb-0 section-subheading">{{name}}</h3>
                    </div>
                    <div class="row no-gutters" id="app_basic">
                        <portfolio-item
                        v-for="item in items"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                        :description="item.description"
                        :image="item.image"
                        :repo="item.repo"
                        :githubusername="githubusername"
                        :descriptionhtml="item.descriptionhtml"
                        :descriptionlist="item.descriptionlist"
                        ></portfolio-item>
                    </div>
                </div>`,
    },
);