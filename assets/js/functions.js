$(document).ready(function() {


    //linkedin
    $( ".linkedin" ).mouseover(function(){
        $(this).attr("src", "assets/images/home/linkedin_mo.png");
    });
    $( ".linkedin" ).mouseout(function(){
        $(this).attr("src", "assets/images/home/linkedin.png");
    });

    //facebook
    $( ".facebook" ).mouseover(function(){
        $(this).attr("src", "assets/images/home/fb_mo.png");
    });
    $( ".facebook" ).mouseout(function(){
        $(this).attr("src", "assets/images/home/fb.png");
    });

    //email
    $( ".email" ).mouseover(function(){
        $(this).attr("src", "assets/images/home/email_mo.png");
    });
    $( ".email" ).mouseout(function(){
        $(this).attr("src", "assets/images/home/email.png");
    });

    //back_to_top
    $( ".back_to_top" ).mouseover(function(){
        $(this).attr("src", "assets/images/home/back_to_top_mo.png");
        $(".next_project").addClass('erase');
    });
    $( ".back_to_top" ).mouseout(function(){
        $(this).attr("src", "assets/images/home/back_to_top.png");
        $(".next_project").removeClass('erase');
    });


    //next_project
    $( ".next_project" ).mouseover(function(){
        $(this).attr("src", "assets/images/home/next_project_mo.png");
        $(".back_to_top").addClass('erase');

    });
    $( ".next_project" ).mouseout(function(){
        $(this).attr("src", "assets/images/home/next_project.png");
        $(".back_to_top").removeClass('erase');
    });


    //Projects
     $(".projects").click(function() {
        window.location = $(this).find("a").attr("href"); return false;
      });

    //muda imagem das thumbs qdo passa o mouse
      // $( ".portifolio" ).mouseover(function() {
      //
      //     let element = $(this).find("img");
      //     let img = element.first().attr('src');
      //     var res = img.split(".jpg");
      //     let newThumb = res[0] + '_mo.jpg' + res[1];
      //
      //     element.first().attr('src', newThumb);
      // });
      //
      // $( ".portifolio" ).mouseleave(function() {
      //
      //     let element = $(this).find("img");
      //     let img = element.first().attr('src');
      //     var res = img.split("_mo");
      //     let newThumb = res[0] + res[1];
      //
      //     element.first().attr('src', newThumb);
      // });

      $( ".img_1" ).mouseover(function() {
          $( '.img_1_this' ).attr("src","assets/images/home/TUMB_1_mo.jpg");
      })

      $( ".img_1" ).mouseleave(function() {
          $( '.img_1_this' ).attr("src","assets/images/home/TUMB_1.jpg");
      })

      $( ".img_2" ).mouseover(function() {
          $( '.img_2_this' ).attr("src","assets/images/home/TUMB_2_mo.jpg");
      })

      $( ".img_2" ).mouseleave(function() {
          $( '.img_2_this' ).attr("src","assets/images/home/TUMB_2.jpg");
      })

      $( ".img_3" ).mouseover(function() {
          $( '.img_3_this' ).attr("src","assets/images/home/TUMB_3_mo.jpg");
      })

      $( ".img_3" ).mouseleave(function() {
          $( '.img_3_this' ).attr("src","assets/images/home/TUMB_3.jpg");
      })

      $( ".img_4" ).mouseover(function() {
          $( '.img_4_this' ).attr("src","assets/images/home/TUMB_3_mo.jpg");
      })

      $( ".img_4" ).mouseleave(function() {
          $( '.img_4_this' ).attr("src","assets/images/home/TUMB_4.jpg");
      })

      $( ".img_5" ).mouseover(function() {
          $( '.img_5_this' ).attr("src","assets/images/home/TUMB_5_mo.jpg");
      })

      $( ".img_5" ).mouseleave(function() {
          $( '.img_5_this' ).attr("src","assets/images/home/TUMB_5.jpg");
      })

      $( ".img_6" ).mouseover(function() {
          $( '.img_6_this' ).attr("src","assets/images/home/TUMB_6_mo.jpg");
      })

      $( ".img_6" ).mouseleave(function() {
          $( '.img_6_this' ).attr("src","assets/images/home/TUMB_6.jpg");
      })

      $( ".img_7" ).mouseover(function() {
          $( '.img_7_this' ).attr("src","assets/images/home/TUMB_7_mo.jpg");
      })

      $( ".img_7" ).mouseleave(function() {
          $( '.img_7_this' ).attr("src","assets/images/home/TUMB_7.jpg");
      })

      $( ".img_8" ).mouseover(function() {
          $( '.img_8_this' ).attr("src","assets/images/home/TUMB_8_mo.jpg");
      })

      $( ".img_8" ).mouseleave(function() {
          $( '.img_8_this' ).attr("src","assets/images/home/TUMB_8.jpg");
      })

});
