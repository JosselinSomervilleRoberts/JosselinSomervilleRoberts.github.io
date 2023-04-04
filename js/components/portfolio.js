Vue.component(
    'portfolio',
    {
        props: {
            rows: {
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
                        <!-- <h3 class="text-secondary mb-0">Portfolio</h3> -->
                        <h2 class="mb-2">Personal & Academic Projects</h2>
                    </div>
                    <div>
                        <portfolio-row
                        v-for="row in rows"
                        :key="row.id"
                        :id="row.id"
                        :name="row.name"
                        :items="row.items"
                        ></portfolio-row>
                    </div>
                </div>
            </section>`,
    },
);