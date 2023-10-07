Vue.component(
    'app',
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
            linkedinusername: {
                type: String,
                required: true,
            },
            googlescholar: {
                type: String,
                required: false,
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
            githubusername: {
                type: String,
                required: false,
            },
            introitems: {
                type: Array,
                required: true,
            },
            portfoliorows: {
                type: Array,
                required: true,
            },
            jobitems: {
                type: Array,
                required: true,
            },
            educationitems: {
                type: Array,
                required: true,
            },
        },
        template:
            `<div>
                <intro
                    style="padding-top: 150px !important;"
                    :name="name"
                    :image="image"
                    :linkedinusername="linkedinusername"
                    :googlescholar="googlescholar"
                    :stanfordprofile="stanfordprofile"
                    :email="email"
                    :title="title"
                    :githubusername="githubusername"
                    :items="introitems"
                ></intro>
                <portfolio
                    :rows="portfoliorows"
                    :githubusername="githubusername"
                ></portfolio>
                <timeline
                    style="background:#edeeef;"
                    id="experience"
                    name="Professional Experience"
                    :items="jobitems"
                ></timeline>
                <timeline
                    id="education"
                    name="Education"
                    :items="educationitems"
                ></timeline>
            </div>`,
    },
)