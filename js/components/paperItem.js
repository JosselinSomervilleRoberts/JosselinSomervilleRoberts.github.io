Vue.component(
    'paper-item',
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
            link: {
                type: String,
                required: true,
            },
            summary: {
                type: String,
                required: true,
            },
            venue: {
                type: String,
                required: true,
            },
        },
        template:
            // Very simple template with simply a nice title (that is a link) and the summary as a paragraph.
            '<p><a :href="link" target="blank"><strong style="font-size: 1.2em">{{title}}</strong></a>, <span style="font-style: italic;">{{venue}}</span><br>{{summary}}</p>'
    },
);