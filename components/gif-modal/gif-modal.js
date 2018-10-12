Vue.component('gif-modal', {
    template: `
    <div class="modal fade" id="gifModal" tabindex="-1" role="dialog" aria-labelledby="demoModal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <img src="https://media.giphy.com/media/Ph4USaLrRz9rqyZDOJ/giphy.gif" width="100%" alt="">
              
                <div class="wrapper modal-footer">
                    <div class="social">
                        <span>Share Gif</span>
                        <div class="social-links">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>   
                </div>
        
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
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