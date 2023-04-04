Vue.component(
    'app',
    {
        props: {
            portfolioitems: {
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
                    :items="portfolioitems"
                    :githubusername="githubusername"
                ></portfolio>
                <timeline
                    :items="jobitems"
                ></timeline>
            </div>`,
    },
)