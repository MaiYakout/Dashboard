$(function(){
    //SideBar Toggle
    $('.header .toggle-sidebar').on('click',function(){
        $('.sidebar,.page-content').toggleClass('no-sidebar');
    });
    $('.header .toggle-sidebar').hover(function(){
        console.log("hover");
        $(".exchange").fadeIn();
    },function(){
        $(".exchange").fadeOut();
    });
    $('.header .toggle-expand').hover(function(){
        console.log("hover");
        $(".expand").fadeIn();
    },function(){
        $(".expand").fadeOut();
    });
    //SubMenu Toggle
    $('.submenu').on('click',function(){
        $(this).parent().find('.child').slideToggle();
        $(this).find('.fa-angle-right').toggleClass('down');
    });
    //fullscreen icon
    $('.toggle-expand').on('click',function(){
        $(this).toggleClass('fullscreen');
        if($(this).hasClass('fullscreen')){
            openFullscreen();
        }else{
            closeFullscreen();
        }

    });
    //setting-option
    $('.toggle-setting').on('click',function(){
        $(this).parent().toggleClass('hide-setting');
        $(this).find('i').toggleClass('fa-spin');
    });
    //colors option box
    var themeClasses=[];
    $(".color-box li").each(function(){
        themeClasses.push($(this).data("theme"));
    });
    $(".color-box li").on("click",function(){
        $("body").removeClass(themeClasses.join(" ")).addClass($(this).data('theme'))
        $(this).addClass('active').siblings().removeClass('active')
    });
    //fonts option box
    var fonts=[];
    $(".font-box select option").each(function(){
        fonts.push($(this).val());
    });
    console.log(fonts);
    $(".font-box select").on("change",function(){
        $("body").removeClass(fonts.join(' ')).addClass($(this).find('option:selected').val())
    });
});
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    }

    /* Close fullscreen */
    function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    }
