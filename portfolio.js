$(function(){

// ------------------------------header 시작--------------------
// -------------------------------header 검색창------------------
    var a=0;
    $("#header_box>a").click(function(e){
        e.preventDefault();
        
        if(a==0){
            $("#header_box>input").fadeIn(300);
            a++;
        }
        else if(a>0){
            $("#header_box>input").fadeOut(300);
            a--;
        }
    });
    
    $("#header2_left").click(function(e){
        e.preventDefault();

        if(a==0){
            $("#header2_left a:nth-child(1)").addClass("on");
            $("#header2_left a:nth-child(2)").addClass("on");
            a++;
            $("nav").addClass("on");
            
            $("#header_box2").on("scroll touchmove mousewheel", function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        }
        else if(a==1){
            $("#header2_left a:nth-child(1)").removeClass("on");
            $("#header2_left a:nth-child(2)").removeClass("on");
            a--;
            $("nav").removeClass("on");
            
            $("#header_box2").off("scroll touchmove mousewheel");
        }
    });

// -------------------------------slider 시작--------------------------------

    var b1=0;

    $("#sliderbox img").eq(0).addClass("on");
    $("#slider_roundbox a").eq(0).addClass("on");

    b=function(){
        if(b1==0){
            b1++;
        }
        else if(b1>0){
            b1--;
        }

        $("#sliderbox img").removeClass("on");
        $("#sliderbox img").eq(b1).addClass("on");
        $("#slider_roundbox a").removeClass("on");
        $("#slider_roundbox a").eq(b1).addClass("on");
    }

    b2=setInterval(b,4000);

    $("#sliderbox").hover(function(){
        clearInterval(b2);
        $("#slider_left, #slider_right").css({"display":"inline-block"});
    },function(){
        b2=setInterval(b,4000);
        $("#slider_left, #slider_right").css({"display":"none"});
    });

    $("#slider_left").click(function(e){
        e.preventDefault();

        if(b1==0){
            b1=1;
        }
        else if(b1>0){
            b1=0;
        }
        $("#sliderbox img").removeClass("on");
        $("#sliderbox img").eq(b1).addClass("on");
        $("#slider_roundbox a").removeClass("on");
        $("#slider_roundbox a").eq(b1).addClass("on");
    });
    $("#slider_right").click(function(e){
        e.preventDefault();

        if(b1==0){
            b1=1;
        }
        else if(b1>0){
            b1=0;
        }
        $("#sliderbox img").removeClass("on");
        $("#sliderbox img").eq(b1).addClass("on");
        $("#slider_roundbox a").removeClass("on");
        $("#slider_roundbox a").eq(b1).addClass("on");
    });
    $("#slider_roundbox a").click(function(e){
        e.preventDefault();
        b1=$(this).index();

        $("#sliderbox img").removeClass("on");
        $("#sliderbox img").eq(b1).addClass("on");
        $("#slider_roundbox a").removeClass("on");
        $("#slider_roundbox a").eq(b1).addClass("on");
    });

// ----------------------------section image 시작------------------------

    $(".picbox").hover(function(){
        var c=$(this).index();

        $(".picbox:nth-child("+(c+1)+") .imgbox img").css({"transform":"scale(1.05)"});
    },function(){
        $(".imgbox img").css({"transform":"scale(1)"});
    });

    var d=$(window).width();

    if(d>900){
        $(window).scroll(function(){

            $(".picbox").each(function(){
                var e1=$(this).offset().top-800;
                var e=$(window).scrollTop();

                if(e>=e1){
                    $(this).addClass("on");
                }
            });
        });
    }
    else if(d<=900){
        $(".picbox").addClass("on");
    }

// --------------------------------------aside 시작------------------------

    $("#gotop").hover(function(){
        $("#gotop").addClass("on");
        $("#gotop a").addClass("on");
    },function(){
        $("#gotop").removeClass("on");
        $("#gotop a").removeClass("on");
    })
});