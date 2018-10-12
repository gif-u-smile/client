Vue.component('main-content', {
    template: `
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-3" v-for="(gif, index) in gifs">    
                <img v-bind:src="gif.gifURL" class="my-gif shadow" @click="sendInfo(gif.gifURL)" data-toggle="modal" data-target="#gifModal">
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            gifs: [],
            selected : '' 
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
        },
        sendInfo(item) {
            this.selected = item;
        }
    }
})