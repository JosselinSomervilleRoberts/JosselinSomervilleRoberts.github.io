Vue.component(
    'portfolio',
    {
        props: {
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
            `<section class="content-section" id="projects">
                <div class="container">
                    <div class="content-section-heading text-center">
                        <h3 class="text-secondary mb-0">Portfolio</h3>
                        <h2 class="mb-2">Personal & Academic Projects</h2>
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
                </div>
            </section>`,
    },
);