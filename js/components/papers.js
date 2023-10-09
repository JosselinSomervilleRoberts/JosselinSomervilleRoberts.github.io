Vue.component(
    'papers',
    {
        props: {
            items: {
                type: Array,
                required: true,
            },
        },
        template:
            `<section class="content-section" id="papers">
                <div class="container">
                    <div class="content-section-heading text-center">
                        <!-- <h3 class="text-secondary mb-0">Papers</h3> -->
                        <h2 class="section-heading  mb-2">Papers</h2>
                    </div>
                    <br/>
                    <div>
                        <paper-item
                        v-for="item in items"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                        :link="item.link"
                        :summary="item.summary"
                        :venue="item.venue"
                        ></paper-item>
                    </div>
                </div>
            </section>`,
    },
);