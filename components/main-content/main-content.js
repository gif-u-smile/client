Vue.component('main-content', {
    template: `
    <img v-bind:src="gifs[1].gifURL">
    `,
    data: function () {
        return {
            gifs: []
        }
    },
    created: function () {
        this.getAllGif()
    },

    methods: {
        getAllGif: function () {
            // console.log('masuke ke get all items')
            let self = this
            axios({
                method: 'GET',
                url: 'http://localhost:3000/'
            })
            .then(result => {
                console.log(result.data[0].name)
                self.gifs = result.data
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})