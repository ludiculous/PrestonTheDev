$(document).ready(function(){
  SmoothScroll();
  HandleLightBox();
  HandleLightBoxClose();
  HandleSubmit();
  HandleHamburgerMenu();
  HandleResize();

  HandleScroll();
})

var actionsData = new FormData();
var emailForm = new FormData();
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

var bannerClicked = false;

function HandleLightBox(){
  $('.port-wrapper').on("click",function(e){
         if($('.port-modal-wrapper')){
                $('.port-modal-wrapper').remove()
          }
     
        if(!bannerClicked){
           $('#port-modal').css({"display":"block","opacity":"1"});

           var bannerName = e.delegateTarget.attributes.data.value; 
            console.log(bannerName);

             actionsData.append("bannerName",bannerName);
            
      
           $('html').css("overflow","hidden");

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
        }

        bannerClicked = true;


      })
}


function HandleLightBoxClose(){
  $('#port-modal').on("click",function(){
      bannerClicked = false;
      $('#port-modal').css("display","none");
      $('html').css("overflow","visible");

  });
  
}

function HandleHamburgerMenu(){
    
      $('#hamburger-menu').click(function(){
         $('#mobile-header').css("display","block");
      })
      $("#mobile-header-table").click(function(){
        $('#mobile-header').css("display","none");
      })
}


function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};


var submitted =false;
var formValidated = false;

function HandleSubmit(){
 

  $("#my-submit").click(function(e){
  e.preventDefault();

  var nameData = $("#name-field").val();
  var emailData = $("#email-field").val();
  var commentsData = $("#comments-field").val();
  
  var emailFormData = {
    nameData:nameData,
    emailData:emailData,
    commentsData:commentsData
  }

    HandleInputUpdate();

    if(!submitted){
      HandleFormValidate(emailFormData);
    }
    if(formValidated){
        emailForm.append("email",emailData);
        emailForm.append("name",nameData);
        emailForm.append("comments",nameData);
       
        $.ajax({
                              type: "POST",
                              url: "../php/email.php",
                              data: emailForm,
                              processData: false,
                              cache: false,
                              contentType: false,
                              success: function(r) {
                               console.log('sent');
                              }
        });
    }

    setTimeout(function(){
        submitted = false;
    }, 500);

    submitted =true;
  });
}

function HandleFormValidate(eFormData){
  var validateForm = {
    n:false,
    e:false,
    c:false
  }
   if(!isValidEmailAddress(eFormData.emailData) ) {
     console.log(eFormData.emailData);
      $('#email-error').css("display","block");
    }
    else{
       validateForm.e = true;

    }
    if (eFormData.nameData.length < 1) {
         $('#name-error').css("display","block");
      }
      else{
         validateForm.n = true;
      }
  if(eFormData.commentsData.length < 1){
      $('#comments-error').css("display","block");
    }
    else{
      validateForm.c = true;
    }

     HandleFormState();

    function HandleFormState(){
       var counter = 0;
       for(prop in validateForm){
          if(validateForm[prop]){
              counter++;
          }
        }
        if(counter == 3){
          formValidated = true;
        }
   }
}

function HandleInputUpdate(){
   $("#name-field").on("change",function(){
      if($(this).val().length<1){
          $('#name-error').css("display","block");
      }
      else{
        $('#name-error').css("display","none");
      }
   });

   $("#email-field").on("change",function(){
     if(!isValidEmailAddress($(this).val())){
        $('#email-error').css("display","block");
     }
     else{
        $('#email-error').css("display","none");
     }
   });

   $("#comments-field").on("change",function(){
      if($(this).val().length<1){
        $('#comments-error').css("display","block");
      }
      else{
        $('#comments-error').css("display","none");
      }
   });
}

function HandleResize(){
  $(window).resize(function(){
    if($(window).width()>968){
      $("#mobile-header").css("display","none");
    }
  })
}

function HandleScroll(){
  $(window).scroll(function(){
     if($(window).width()<968){
     $("#mobile-header").css("display","none");
      }
  })
}  


