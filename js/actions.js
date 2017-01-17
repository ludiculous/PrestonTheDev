$(document).ready(function(){
  SmoothScroll();
  HandleLightBox();
  HandleLightBoxClose();
})

var actionsData = new FormData();

function SmoothScroll(){
   
    $('a[href*="#"]:not([href="#"])').click(function() {
      console.log('scrolling')
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

}

function HandleLightBox(){

      $('.port-wrapper').on("click",function(e){
            
          //$('#port-modal').css("display","block");

           var bannerName = e.delegateTarget.attributes.data.value; 
            console.log(bannerName);


            actionsData.append("bannerName",bannerName);
            


            if($('.port-modal-wrapper')){
                $('.port-modal-wrapper').remove()
            }
           // $('html').css("overflow","hidden");

        $.ajax({
                      type: "POST",
                      url: "../php/actions.php",
                      data: actionsData,
                      processData: false,
                      cache: false,
                      contentType: false,
                      success: function(r) {
                       $("#port-modal").append(r);
                      }
            })
      })
}

function HandleLightBoxClose(){
  $('#port-modal').css("display","none");
  $('html').css("overflow","visible");
}
