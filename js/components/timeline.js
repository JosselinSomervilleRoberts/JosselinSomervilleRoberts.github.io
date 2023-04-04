Vue.component(
    'timeline',
    {
        props: {
            items: {
                type: Array,
                required: true,
            },
        },
        template:
            `<section class="content-section bg-light" id="timeline">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading mb-2">Timeline</h2>
                    <!--<p class="lead mb-5">A little bit about me...</p>-->
                    </div>
                </div>
                <div class="container text-center mb-5">
                    <p class="lead">A short summary of my work experience..</p>
                </div>
                <div class="row">
                    <div class="col-lg-12 blabla">
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