Vue.component('main-content', {
    template: `
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-3" v-for="(gif, index) in gifs">    
                <img v-bind:src="gif.gifURL" class="my-gif shadow" @click="sendInfo(gif.gifURL)" data-toggle="modal" data-target="#gifModal">
                <div class="fb-share-button" v-bind:data-href="gif.gifURL" data-layout="button" data-size="large" data-mobile-iframe="true">
                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstorage.googleapis.com%2Fgif-you-smile%2F1539313467411thinking_emoji.mp4&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                    Share
                    </a>
                </div>
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
        },
        download : function () {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/download',
                data: {
                    gif : gif
                }
            })
                .then(function(result) {
                    console.log(result);
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    }
})