Vue.component(
    'app',
    {
        props: {
            name: {
                type: String,
                required: true,
            },
            image : {
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
                required: false,
            },
        },
        template:
            `<div>
                <intro
                    :name="name"
                    :image="image"
                    :linkedinusername="linkedinusername"
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
                    :items="jobitems"
                ></timeline>
            </div>`,
    },
)