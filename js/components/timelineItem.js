Vue.component (
    'timeline-item',
    {
        props: {
            id: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            dates: {
                type: String,
                required: true,
            },
            location: {
                type: String,
                required: true,
            }
        },
        template:
            `<li v-bind:class="(id%2==0)?'timeline-inverted':'timeline-normal'" style="margin-bottom:32px">
                <a :href="link" target="blank">
                <div class="timeline-image">
                    <img class="img-circle img-responsive" :src="image" :alt="title">
                </div>
                </a>
                <div class="timeline-panel">
                <div class="timeline-heading">
                    <h5 v-html="dates"></h5>
                    <h4 class="subheading">
                    <a :href="link" target="blank">{{title}}</a>, {{subtitle}}<br>{{location}}</h4>
                </div>
                <div v-bind:class="(id%2==0)?'timeline-inverted-body':'timeline-body'">
                    <p class="lead">{{description}}</p>
                </div>
                </div>
            </li>`
    },
);