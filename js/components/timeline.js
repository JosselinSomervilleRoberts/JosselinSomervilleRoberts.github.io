Vue.component(
    'timeline',
    {
        props: {
            id : {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            items: {
                type: Array,
                required: true,
            },
        },
        template:
            `<section class="content-section" :id="id">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading mb-2">{{name}}</h2>
                    </div>
                </div>
                <div class="container text-center mb-5">
                </div>
                <div class="row">
                    <div>
                    <ul class="timeline">
                        <timeline-item
                        v-for="item in items"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                        :subtitle="item.subtitle"
                        :description="item.description"
                        :image="item.image"
                        :link="item.link"
                        :dates="item.dates"
                        :location="item.location"
                        ></timeline-item>
                    </ul>
                    </div>
                </div>
                </div>
            </section>`,
    },
);