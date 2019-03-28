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
    });
    $( ".back_to_top" ).mouseout(function(){
        $(this).attr("src", "assets/images/home/back_to_top.png");
    });


    //next_project
    $( ".next_project" ).mouseover(function(){
        $(this).attr("src", "assets/images/home/next_project_mo.png");
    });
    $( ".next_project" ).mouseout(function(){
        $(this).attr("src", "assets/images/home/next_project.png");
    });


    //Projects
     $(".projects").click(function() {
        window.location = $(this).find("a").attr("href"); return false;
      });


});
