function cabColScroll(){
    if( jQuery(".cab-col-scroll").css("display") == "block" ){
        var scrBox = jQuery(".cab-col-scroll").eq(0);
        var scrBl = jQuery(scrBox).parent();
        var boxH = jQuery(scrBox).outerHeight();
        var blH = jQuery(scrBl).parent().outerHeight();
        blH = blH - boxH;
        var blT = jQuery(scrBl).offset().top - 23;
        var scroll = jQuery(window).scrollTop();
        var top = scroll - blT;
        if(top < 0){top = 0;}if(top > blH){top = blH;}

        var headH = jQuery(".header-wrap").outerHeight();

        // header-wrap scr scr-on scr-top
        if( jQuery(".header-wrap").hasClass("scr") == true && (jQuery(".header-wrap").hasClass("scr-top") == true || jQuery(".header-wrap").hasClass("scr-fix") == true)){
            if( blT > (scroll) )
            {
                headH = blT - scroll - headH;
                if(headH < 0){headH = 0;}
                else{headH = headH*(-1);}
            }
            top = top + headH;
            if(top < 0){top = 0;}
        }

        jQuery(scrBox).css("transform", "translateY("+top+"px)");
    }
}
// function itemResize(){
//     $('.horizontal-item').each(function (){
//         if (window.matchMedia("(min-width: 768px)").matches) {
//             $(this).find('.horizontal-slider__image').height(parseInt($(this).find('.horizontal-item__info').innerHeight()) - 30);
//         }else{
//             $(this).find('.horizontal-slider__image').height('190px');
//         }
//     });
// }

jQuery(document).ready(function(){
    cabColScroll();
    // setTimeout(function () {
    //     itemResize();
    // });
    jQuery(document).on("click",".size-meter_btn", function(){
        let input = jQuery(this).parent().find("input");
        let oldVal = parseInt(input.val());
        let noload = input.data('noload');
        let unit = input.data('unit')?' '+input.data('unit'):'';

       if( jQuery(this).hasClass("minus") == true ){oldVal--;}
       if( jQuery(this).hasClass("plus") == true ){oldVal++;}
       if(oldVal < 1){oldVal = 1;}
       input.data("value", oldVal);
       input.val(oldVal + unit);

       load_price(input,oldVal, noload);
       input.trigger('change');
    });
    jQuery(document).on("keyup",".size-meter input", function(){
        let input = jQuery(this);
        let oldVal = parseInt(input.val());
        let noload = input.data('noload');
        if(oldVal < 1){
            oldVal = 1;
            // input.val(oldVal)
        }

        load_price(input,oldVal, noload);
        input.trigger('change');
    });

    jQuery(document).on("focus",".size-meter input", function(){
        let input = jQuery(this);
        let oldVal = parseInt(input.val());
        input.val(oldVal)
    });

    jQuery(document).on("blur",".size-meter input", function(){
        let input = jQuery(this);
        let oldVal = parseInt(input.val());
        let unit = input.data('unit')?' '+input.data('unit'):'';
        if(oldVal < 1){
            oldVal = 1;
        }
        input.val(oldVal + unit)
    });

    jQuery(document).on("keypress",".size-meter input", function(){
        var key, keyChar;
        if (!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if(key >= 48 && key <= 57){
            return true;
        }else{
            return false;
        }

        keyChar = String.fromCharCode(key);
        if (!/\d/.test(keyChar)) {
            return false;
        }

    });

    jQuery('.size-meter input').each(function(){
        let noload = jQuery(this).data('noload');
        let oldVal = jQuery(this).data("value");
        let unit = jQuery(this).data('unit')?' '+jQuery(this).data('unit'):'';
        jQuery(this).data("value", oldVal);
        jQuery(this).val(oldVal + unit);
        let input = jQuery(this);
        load_price(input,oldVal, noload);
    });

    function load_price(input,oldVal, noload=false){
        let specialPrice = input.data("special");
        let price = input.data("price");
        let horizontal = input.data("horizontal");
        let specialVal = oldVal * parseInt(specialPrice);
        let priceVal = oldVal * parseInt(price);
        let html = '';
        // let html2 = '';

        if(!horizontal){
            if(specialVal){
                html += '<span class="new">'+new Intl.NumberFormat('ru-RU').format(specialVal)+ ' руб.' +'</span><span class="old">'+new Intl.NumberFormat('ru-RU').format(priceVal) + ' руб.'+'</span>';
                // html2 += 'КУПИТЬ ЗА ' + new Intl.NumberFormat('ru-RU').format(specialVal)+ ' руб.';
            }else{
                html += '<span class="new">'+new Intl.NumberFormat('ru-RU').format(priceVal) + ' руб.</span>';
                // html2 += 'КУПИТЬ ЗА ' + new Intl.NumberFormat('ru-RU').format(priceVal)+ ' руб.';
            }

            if(!noload){
                input.parents('.pr-about-product').find('.btn-load').html(html);
                // input.parents('.pr-about-product').find('.btn-load2').html(html2);
                input.parents('.pr-small').find('a.btn').html(html);
            }
        }else{
            if(specialVal){
                html += new Intl.NumberFormat('ru-RU').format(specialVal) + ' руб.';
            }else{
                html += new Intl.NumberFormat('ru-RU').format(priceVal) + ' руб.';
            }

            if(!noload){
                input.parents('.horizontal-item').find('.horizontal-item__price span').html(html);
            }
        }

        if(input.parents('.pr-small').find('.catalog-item__bottom__prices')){
            html = ''
            if(specialVal){
                html += '<span class="catalog-item__bottom__prices__price">'+new Intl.NumberFormat('ru-RU').format(specialVal)+ ' руб.' +'</span>' +
                    '<span class="catalog-item__bottom__prices__old-price">'+new Intl.NumberFormat('ru-RU').format(priceVal) + ' руб.'+'</span>';
                // html2 += 'КУПИТЬ ЗА ' + new Intl.NumberFormat('ru-RU').format(specialVal)+ ' руб.';
            }else{
                html += '<span class="catalog-item__bottom__prices__price">'+new Intl.NumberFormat('ru-RU').format(priceVal) + ' руб.</span>';
                // html2 += 'КУПИТЬ ЗА ' + new Intl.NumberFormat('ru-RU').format(priceVal)+ ' руб.';
            }

            input.parents('.pr-small').find('.catalog-item__bottom__prices').html(html)
        }


        //
    }
    jQuery(document).on("click",".cab-col-btn", function(){
        if( jQuery("body").hasClass("show-cab-col") != true ){
            jQuery(this).text("СКРЫТЬ");
        }
        else {
            jQuery(this).text("ВЫБРАНО");
        }
        jQuery("body").toggleClass("show-cab-col");
        return false;
    });

    jQuery(document).on("click",".cab-order__sbmts.w-btn", function(){
        jQuery(".js-btn").addClass("cab-order__sbmts");
        jQuery(".js-btn").css("height", "auto");
        jQuery(".js-btn").css("box-sizing", "border-box");
    });


    jQuery(".form-submit-lk").submit(function () {
        var th = $(this);
        $('.load__preloader').fadeIn('', function () {
            $.ajax({
                type: "POST",
                url: '/index.php?route=checkout/cart/order',
                data: th.serialize(),
                dataType: 'json',
            }).done(function (json) {
                    if(json['error']){
                        alert(json['error']);
                    }
                if (json['success']) {
                    alert('Ваш заказ оформлен! Мы свяжемся с вами и детальнее обсудим заказ');
                    setTimeout(function () {
                        th.trigger("reset");
                        $('.load__preloader').fadeOut("slow");
                    }, 1000);
                }
            });
        });
        return false;
    });

    new Swiper('.horizontal-item .swiper', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.horizontal-slider__next',
            prevEl: '.horizontal-slider__prev',
        },
        pagination: {
            el: '.horizontal-slider__dots',
            type: 'bullets',
        },
    });

    $(document).on('click','.open-modal', function (){
        console.log(321)
        const id = $(this).data('id');
        const form = $(this).data('form');
        console.log(id)
        console.log(form)
        if(id){
            if(form){
                $(id).find('input[name="form"]').val(form);
            }else{
                $(id).find('input[name="form"]').val('');
            }
            $(id).addClass('modal-block_active');
        }
    });
    $('body').mouseup(function(e) {
        const modal = $(".modal-block__content");
        if (!modal.is(e.target) && modal.has(e.target).length === 0) {
            $(".modal-block").removeClass("modal-block_active");
        }
    });
    $(document).on('click','.modal-block__close_btn', function (){
        $(".modal-block").removeClass("modal-block_active");
    });
    $(document).on('keydown', function (e){
        if(e.keyCode === 27) {
            $(".modal-block").removeClass("modal-block_active");
        }
    });
});
jQuery(window).scroll(function(){
    cabColScroll();
});
jQuery(window).on("resize",function(){
    cabColScroll();
    // itemResize();
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjYWJDb2xTY3JvbGwoKXtcclxuICAgIGlmKCBqUXVlcnkoXCIuY2FiLWNvbC1zY3JvbGxcIikuY3NzKFwiZGlzcGxheVwiKSA9PSBcImJsb2NrXCIgKXtcclxuICAgICAgICB2YXIgc2NyQm94ID0galF1ZXJ5KFwiLmNhYi1jb2wtc2Nyb2xsXCIpLmVxKDApO1xyXG4gICAgICAgIHZhciBzY3JCbCA9IGpRdWVyeShzY3JCb3gpLnBhcmVudCgpO1xyXG4gICAgICAgIHZhciBib3hIID0galF1ZXJ5KHNjckJveCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICB2YXIgYmxIID0galF1ZXJ5KHNjckJsKS5wYXJlbnQoKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGJsSCA9IGJsSCAtIGJveEg7XHJcbiAgICAgICAgdmFyIGJsVCA9IGpRdWVyeShzY3JCbCkub2Zmc2V0KCkudG9wIC0gMjM7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciB0b3AgPSBzY3JvbGwgLSBibFQ7XHJcbiAgICAgICAgaWYodG9wIDwgMCl7dG9wID0gMDt9aWYodG9wID4gYmxIKXt0b3AgPSBibEg7fVxyXG5cclxuICAgICAgICB2YXIgaGVhZEggPSBqUXVlcnkoXCIuaGVhZGVyLXdyYXBcIikub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgLy8gaGVhZGVyLXdyYXAgc2NyIHNjci1vbiBzY3ItdG9wXHJcbiAgICAgICAgaWYoIGpRdWVyeShcIi5oZWFkZXItd3JhcFwiKS5oYXNDbGFzcyhcInNjclwiKSA9PSB0cnVlICYmIChqUXVlcnkoXCIuaGVhZGVyLXdyYXBcIikuaGFzQ2xhc3MoXCJzY3ItdG9wXCIpID09IHRydWUgfHwgalF1ZXJ5KFwiLmhlYWRlci13cmFwXCIpLmhhc0NsYXNzKFwic2NyLWZpeFwiKSA9PSB0cnVlKSl7XHJcbiAgICAgICAgICAgIGlmKCBibFQgPiAoc2Nyb2xsKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRIID0gYmxUIC0gc2Nyb2xsIC0gaGVhZEg7XHJcbiAgICAgICAgICAgICAgICBpZihoZWFkSCA8IDApe2hlYWRIID0gMDt9XHJcbiAgICAgICAgICAgICAgICBlbHNle2hlYWRIID0gaGVhZEgqKC0xKTt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9wID0gdG9wICsgaGVhZEg7XHJcbiAgICAgICAgICAgIGlmKHRvcCA8IDApe3RvcCA9IDA7fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5KHNjckJveCkuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWShcIit0b3ArXCJweClcIik7XHJcbiAgICB9XHJcbn1cclxuLy8gZnVuY3Rpb24gaXRlbVJlc2l6ZSgpe1xyXG4vLyAgICAgJCgnLmhvcml6b250YWwtaXRlbScpLmVhY2goZnVuY3Rpb24gKCl7XHJcbi8vICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzY4cHgpXCIpLm1hdGNoZXMpIHtcclxuLy8gICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuaG9yaXpvbnRhbC1zbGlkZXJfX2ltYWdlJykuaGVpZ2h0KHBhcnNlSW50KCQodGhpcykuZmluZCgnLmhvcml6b250YWwtaXRlbV9faW5mbycpLmlubmVySGVpZ2h0KCkpIC0gMzApO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5ob3Jpem9udGFsLXNsaWRlcl9faW1hZ2UnKS5oZWlnaHQoJzE5MHB4Jyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIGNhYkNvbFNjcm9sbCgpO1xyXG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgaXRlbVJlc2l6ZSgpO1xyXG4gICAgLy8gfSk7XHJcbiAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixcIi5zaXplLW1ldGVyX2J0blwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGV0IG9sZFZhbCA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcclxuICAgICAgICBsZXQgbm9sb2FkID0gaW5wdXQuZGF0YSgnbm9sb2FkJyk7XHJcbiAgICAgICAgbGV0IHVuaXQgPSBpbnB1dC5kYXRhKCd1bml0Jyk/JyAnK2lucHV0LmRhdGEoJ3VuaXQnKTonJztcclxuXHJcbiAgICAgICBpZiggalF1ZXJ5KHRoaXMpLmhhc0NsYXNzKFwibWludXNcIikgPT0gdHJ1ZSApe29sZFZhbC0tO31cclxuICAgICAgIGlmKCBqUXVlcnkodGhpcykuaGFzQ2xhc3MoXCJwbHVzXCIpID09IHRydWUgKXtvbGRWYWwrKzt9XHJcbiAgICAgICBpZihvbGRWYWwgPCAxKXtvbGRWYWwgPSAxO31cclxuICAgICAgIGlucHV0LmRhdGEoXCJ2YWx1ZVwiLCBvbGRWYWwpO1xyXG4gICAgICAgaW5wdXQudmFsKG9sZFZhbCArIHVuaXQpO1xyXG5cclxuICAgICAgIGxvYWRfcHJpY2UoaW5wdXQsb2xkVmFsLCBub2xvYWQpO1xyXG4gICAgICAgaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxuICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJrZXl1cFwiLFwiLnNpemUtbWV0ZXIgaW5wdXRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgaW5wdXQgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgbGV0IG9sZFZhbCA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcclxuICAgICAgICBsZXQgbm9sb2FkID0gaW5wdXQuZGF0YSgnbm9sb2FkJyk7XHJcbiAgICAgICAgaWYob2xkVmFsIDwgMSl7XHJcbiAgICAgICAgICAgIG9sZFZhbCA9IDE7XHJcbiAgICAgICAgICAgIC8vIGlucHV0LnZhbChvbGRWYWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkX3ByaWNlKGlucHV0LG9sZFZhbCwgbm9sb2FkKTtcclxuICAgICAgICBpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJmb2N1c1wiLFwiLnNpemUtbWV0ZXIgaW5wdXRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgaW5wdXQgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgbGV0IG9sZFZhbCA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcclxuICAgICAgICBpbnB1dC52YWwob2xkVmFsKVxyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcImJsdXJcIixcIi5zaXplLW1ldGVyIGlucHV0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0galF1ZXJ5KHRoaXMpO1xyXG4gICAgICAgIGxldCBvbGRWYWwgPSBwYXJzZUludChpbnB1dC52YWwoKSk7XHJcbiAgICAgICAgbGV0IHVuaXQgPSBpbnB1dC5kYXRhKCd1bml0Jyk/JyAnK2lucHV0LmRhdGEoJ3VuaXQnKTonJztcclxuICAgICAgICBpZihvbGRWYWwgPCAxKXtcclxuICAgICAgICAgICAgb2xkVmFsID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQudmFsKG9sZFZhbCArIHVuaXQpXHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwia2V5cHJlc3NcIixcIi5zaXplLW1ldGVyIGlucHV0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGtleSwga2V5Q2hhcjtcclxuICAgICAgICBpZiAoIWV2ZW50KSB2YXIgZXZlbnQgPSB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUpIGtleSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQud2hpY2gpIGtleSA9IGV2ZW50LndoaWNoO1xyXG5cclxuICAgICAgICBpZihrZXkgPj0gNDggJiYga2V5IDw9IDU3KXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGtleUNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleSk7XHJcbiAgICAgICAgaWYgKCEvXFxkLy50ZXN0KGtleUNoYXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KCcuc2l6ZS1tZXRlciBpbnB1dCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgbm9sb2FkID0galF1ZXJ5KHRoaXMpLmRhdGEoJ25vbG9hZCcpO1xyXG4gICAgICAgIGxldCBvbGRWYWwgPSBqUXVlcnkodGhpcykuZGF0YShcInZhbHVlXCIpO1xyXG4gICAgICAgIGxldCB1bml0ID0galF1ZXJ5KHRoaXMpLmRhdGEoJ3VuaXQnKT8nICcralF1ZXJ5KHRoaXMpLmRhdGEoJ3VuaXQnKTonJztcclxuICAgICAgICBqUXVlcnkodGhpcykuZGF0YShcInZhbHVlXCIsIG9sZFZhbCk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnZhbChvbGRWYWwgKyB1bml0KTtcclxuICAgICAgICBsZXQgaW5wdXQgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgbG9hZF9wcmljZShpbnB1dCxvbGRWYWwsIG5vbG9hZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkX3ByaWNlKGlucHV0LG9sZFZhbCwgbm9sb2FkPWZhbHNlKXtcclxuICAgICAgICBsZXQgc3BlY2lhbFByaWNlID0gaW5wdXQuZGF0YShcInNwZWNpYWxcIik7XHJcbiAgICAgICAgbGV0IHByaWNlID0gaW5wdXQuZGF0YShcInByaWNlXCIpO1xyXG4gICAgICAgIGxldCBob3Jpem9udGFsID0gaW5wdXQuZGF0YShcImhvcml6b250YWxcIik7XHJcbiAgICAgICAgbGV0IHNwZWNpYWxWYWwgPSBvbGRWYWwgKiBwYXJzZUludChzcGVjaWFsUHJpY2UpO1xyXG4gICAgICAgIGxldCBwcmljZVZhbCA9IG9sZFZhbCAqIHBhcnNlSW50KHByaWNlKTtcclxuICAgICAgICBsZXQgaHRtbCA9ICcnO1xyXG4gICAgICAgIC8vIGxldCBodG1sMiA9ICcnO1xyXG5cclxuICAgICAgICBpZighaG9yaXpvbnRhbCl7XHJcbiAgICAgICAgICAgIGlmKHNwZWNpYWxWYWwpe1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHNwYW4gY2xhc3M9XCJuZXdcIj4nK25ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQoc3BlY2lhbFZhbCkrICcg0YDRg9CxLicgKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJvbGRcIj4nK25ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQocHJpY2VWYWwpICsgJyDRgNGD0LEuJysnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAvLyBodG1sMiArPSAn0JrQo9Cf0JjQotCsINCX0JAgJyArIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQoc3BlY2lhbFZhbCkrICcg0YDRg9CxLic7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHNwYW4gY2xhc3M9XCJuZXdcIj4nK25ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQocHJpY2VWYWwpICsgJyDRgNGD0LEuPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAvLyBodG1sMiArPSAn0JrQo9Cf0JjQotCsINCX0JAgJyArIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQocHJpY2VWYWwpKyAnINGA0YPQsS4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighbm9sb2FkKXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnBhcmVudHMoJy5wci1hYm91dC1wcm9kdWN0JykuZmluZCgnLmJ0bi1sb2FkJykuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgIC8vIGlucHV0LnBhcmVudHMoJy5wci1hYm91dC1wcm9kdWN0JykuZmluZCgnLmJ0bi1sb2FkMicpLmh0bWwoaHRtbDIpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucGFyZW50cygnLnByLXNtYWxsJykuZmluZCgnYS5idG4nKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHNwZWNpYWxWYWwpe1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJykuZm9ybWF0KHNwZWNpYWxWYWwpICsgJyDRgNGD0LEuJztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQocHJpY2VWYWwpICsgJyDRgNGD0LEuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW5vbG9hZCl7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wYXJlbnRzKCcuaG9yaXpvbnRhbC1pdGVtJykuZmluZCgnLmhvcml6b250YWwtaXRlbV9fcHJpY2Ugc3BhbicpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGlucHV0LnBhcmVudHMoJy5wci1zbWFsbCcpLmZpbmQoJy5jYXRhbG9nLWl0ZW1fX2JvdHRvbV9fcHJpY2VzJykpe1xyXG4gICAgICAgICAgICBodG1sID0gJydcclxuICAgICAgICAgICAgaWYoc3BlY2lhbFZhbCl7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8c3BhbiBjbGFzcz1cImNhdGFsb2ctaXRlbV9fYm90dG9tX19wcmljZXNfX3ByaWNlXCI+JytuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJykuZm9ybWF0KHNwZWNpYWxWYWwpKyAnINGA0YPQsS4nICsnPC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImNhdGFsb2ctaXRlbV9fYm90dG9tX19wcmljZXNfX29sZC1wcmljZVwiPicrbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScpLmZvcm1hdChwcmljZVZhbCkgKyAnINGA0YPQsS4nKyc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIC8vIGh0bWwyICs9ICfQmtCj0J/QmNCi0Kwg0JfQkCAnICsgbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScpLmZvcm1hdChzcGVjaWFsVmFsKSsgJyDRgNGD0LEuJztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8c3BhbiBjbGFzcz1cImNhdGFsb2ctaXRlbV9fYm90dG9tX19wcmljZXNfX3ByaWNlXCI+JytuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJykuZm9ybWF0KHByaWNlVmFsKSArICcg0YDRg9CxLjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgLy8gaHRtbDIgKz0gJ9Ca0KPQn9CY0KLQrCDQl9CQICcgKyBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJykuZm9ybWF0KHByaWNlVmFsKSsgJyDRgNGD0LEuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQucGFyZW50cygnLnByLXNtYWxsJykuZmluZCgnLmNhdGFsb2ctaXRlbV9fYm90dG9tX19wcmljZXMnKS5odG1sKGh0bWwpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJjbGlja1wiLFwiLmNhYi1jb2wtYnRuXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoIGpRdWVyeShcImJvZHlcIikuaGFzQ2xhc3MoXCJzaG93LWNhYi1jb2xcIikgIT0gdHJ1ZSApe1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykudGV4dChcItCh0JrQoNCr0KLQrFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50ZXh0KFwi0JLQq9CR0KDQkNCd0J5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpRdWVyeShcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaG93LWNhYi1jb2xcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcImNsaWNrXCIsXCIuY2FiLW9yZGVyX19zYm10cy53LWJ0blwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGpRdWVyeShcIi5qcy1idG5cIikuYWRkQ2xhc3MoXCJjYWItb3JkZXJfX3NibXRzXCIpO1xyXG4gICAgICAgIGpRdWVyeShcIi5qcy1idG5cIikuY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKTtcclxuICAgICAgICBqUXVlcnkoXCIuanMtYnRuXCIpLmNzcyhcImJveC1zaXppbmdcIiwgXCJib3JkZXItYm94XCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGpRdWVyeShcIi5mb3JtLXN1Ym1pdC1sa1wiKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aCA9ICQodGhpcyk7XHJcbiAgICAgICAgJCgnLmxvYWRfX3ByZWxvYWRlcicpLmZhZGVJbignJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvaW5kZXgucGhwP3JvdXRlPWNoZWNrb3V0L2NhcnQvb3JkZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGguc2VyaWFsaXplKCksXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoanNvblsnZXJyb3InXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGpzb25bJ2Vycm9yJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqc29uWydzdWNjZXNzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgn0JLQsNGIINC30LDQutCw0Lcg0L7RhNC+0YDQvNC70LXQvSEg0JzRiyDRgdCy0Y/QttC10LzRgdGPINGBINCy0LDQvNC4INC4INC00LXRgtCw0LvRjNC90LXQtSDQvtCx0YHRg9C00LjQvCDQt9Cw0LrQsNC3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmxvYWRfX3ByZWxvYWRlcicpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgU3dpcGVyKCcuaG9yaXpvbnRhbC1pdGVtIC5zd2lwZXInLCB7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuaG9yaXpvbnRhbC1zbGlkZXJfX25leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuaG9yaXpvbnRhbC1zbGlkZXJfX3ByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5ob3Jpem9udGFsLXNsaWRlcl9fZG90cycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLm9wZW4tbW9kYWwnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygzMjEpXHJcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9ICQodGhpcykuZGF0YSgnZm9ybScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pXHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBpZihmb3JtKXtcclxuICAgICAgICAgICAgICAgICQoaWQpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JtXCJdJykudmFsKGZvcm0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoaWQpLmZpbmQoJ2lucHV0W25hbWU9XCJmb3JtXCJdJykudmFsKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKGlkKS5hZGRDbGFzcygnbW9kYWwtYmxvY2tfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5JykubW91c2V1cChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSAkKFwiLm1vZGFsLWJsb2NrX19jb250ZW50XCIpO1xyXG4gICAgICAgIGlmICghbW9kYWwuaXMoZS50YXJnZXQpICYmIG1vZGFsLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtYmxvY2tcIikucmVtb3ZlQ2xhc3MoXCJtb2RhbC1ibG9ja19hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcubW9kYWwtYmxvY2tfX2Nsb3NlX2J0bicsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICQoXCIubW9kYWwtYmxvY2tcIikucmVtb3ZlQ2xhc3MoXCJtb2RhbC1ibG9ja19hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1ibG9ja1wiKS5yZW1vdmVDbGFzcyhcIm1vZGFsLWJsb2NrX2FjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgY2FiQ29sU2Nyb2xsKCk7XHJcbn0pO1xyXG5qUXVlcnkod2luZG93KS5vbihcInJlc2l6ZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICBjYWJDb2xTY3JvbGwoKTtcclxuICAgIC8vIGl0ZW1SZXNpemUoKTtcclxufSk7XHJcblxyXG4iXSwiZmlsZSI6ImxrLmpzIn0=
