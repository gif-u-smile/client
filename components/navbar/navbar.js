Vue.component('nav-bar', {
    template: `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm ">
            <a class="navbar-brand ml-auto" href="#">
                Gif
                <img class="image-wiggle" src="./images/511.png" width="30" height="40" alt="">
                Smile
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="mr-auto">
                </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-5" type="search" placeholder="Search" aria-label="Search">
                        <button class="bubbly-button my-2 my-sm-0 mr-2" >Search</button>
                    </form>
                    <button class="bubbly-button my-2 my-sm-0 mr-5 ml-6">Refresh</button>
                
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