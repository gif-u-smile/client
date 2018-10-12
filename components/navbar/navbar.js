Vue.component('nav-bar', {
    template: `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm ">
            <a class="navbar-brand ml-auto image-wiggle mr-5" href="#">
                Gif
                <img class="image-wiggle" src="./images/511.png" width="30" height="40" alt="">
                Smile
            </a>
            <button class="bubbly-button my-2 my-sm-0 mr-2">Refresh</button>
            <button class="bubbly-button my-2 my-sm-0" data-toggle="modal" data-target="#uploadModal">Upload</button>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="mr-auto">
                </ul>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-3" type="search" placeholder="Search" aria-label="Search">
                    <button class="bubbly-button my-2 my-sm-0 mr-5">Search</button>
                </form>
            </div>  
        </nav>
    </header>
    `,
    data: function () {
        return {
            
        }
    },
    created: function () {
        
    },

    methods: {
        
    }
})