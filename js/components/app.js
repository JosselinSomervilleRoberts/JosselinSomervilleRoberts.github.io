Vue.component(
    'app',
    {
        props: {
            portfoliorows: {
                type: Array,
                required: true,
            },
            githubusername: {
                type: String,
                required: false,
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