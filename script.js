$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times')
        $('.navbar').removeClass('nav-toggle')

        if($(window).scrollTop() > 30){
            console.log("hello")
            $('header').addClass('header-active')
        }else{
            $('header').removeClass('header-active')
        }


        $('section').each(function(){
            var top = $(window).scrollTop()
            console.log("top is " + top)
            var id = $(this).attr('id')
            console.log("id is "+id)
            let height = $(this).height()
            console.log("height is "+height)
            var offset = $(this).offset().top - 200
            console.log("offset is "+offset)
            if(top >= offset && top < height + offset){
                $('.navbar ul li a').removeClass('active')
                $('.navbar').find('[href="#' + id + '"]').addClass('active')

            }
        })
    })

    
})