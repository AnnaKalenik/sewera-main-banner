let cart = {
    'add': function (product_id, quantity, element) {
        // let quant = $(element).parents('.pr-small').find('input[name="depth"]').data('value');
        let quant = $(element).parents('.pr-small').find('input[name="depth"]').val();
        if (!quant) {
            // quant = $(element).parents('.pr-info-wrap').find('input[name="depth"]').data('value');
            quant = $(element).parents('.pr-info-wrap').find('input[name="depth"]').val();
        }
        if (!quant) {
            quant = 1;
        }
        // $('.load__preloader').fadeIn('', function () {
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: 'product_id=' + product_id + '&quantity=' + (typeof (quant) != 'undefined' ? quant : 1),
            dataType: 'json',
            success: function (json) {
                $(element).removeClass('grn').addClass('blk');
                $(element).find('img').attr('src', '/catalog/view/theme/sewera/images/icon-pls-off.svg');
                $(element).removeAttr('onclick').attr('onclick', 'cart.remove(' + json['cart_id'] + ',this,' + product_id + ')');
                $('.cab-icon').addClass('active');
                $('.cab-icon').parent().addClass('active');
                $('.mobile-toolbar__counter').text(json['total']).animate({
                    top: "0",
                }, 300);

                $('.mobile-dom-add').fadeIn().css('display', 'flex');
                setTimeout(function () {
                    $('.mobile-dom-add').fadeOut();
                }, 4000);
                // setTimeout(function () {
                //     $('.load__preloader').fadeOut("slow");
                // }, 500);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
        // });
    },
    'update': function (key, element) {

        // let quantity =$(element).data('value');
        let quantity = $(element).val();
        // $('.load__preloader').fadeIn('', function () {
        $.ajax({
            url: 'index.php?route=checkout/cart/edit',
            type: 'post',
            data: 'key=' + key + '&quantity=' + (typeof (quantity) != 'undefined' ? quantity : 1),
            dataType: 'json',
            success: function (json) {
                $('#cart .cab-prices').load('index.php?route=checkout/cart/info .cab-prices > *');
                let category = $(element).parents('.col-main').find('.question-price');
                let category_id = category.data('category');
                category.load('index.php?route=checkout/cart/info .question-price[data-category="' + category_id + '"] > *');

                // setTimeout(function () {
                //     $('.load__preloader').fadeOut("slow");
                // }, 500);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
        // });
    },
    'remove': function (key, element, product_id, remove = false) {
        // $('.load__preloader').fadeIn('', function () {
        $.ajax({
            url: 'index.php?route=checkout/cart/remove',
            type: 'post',
            data: 'key=' + key,
            dataType: 'json',
            success: function (json) {
                $(element).removeClass('blk').addClass('grn');
                $(element).find('img').attr('src', '/catalog/view/theme/sewera/images/icon-pls.svg');
                $(element).removeAttr('onclick').attr('onclick', 'cart.add(' + product_id + ',1,this)');

                if (json['total'] <= 0) {
                    $('.cab-icon').removeClass('active');
                    $('.cab-icon').parent().removeClass('active');
                    //$('.mobile-toolbar__counter').css('display','none');
                    $('.mobile-toolbar__counter').animate({
                        top: "-17px",
                    }, 300);
                } else {
                    $('.mobile-toolbar__counter').text(json['total']).animate({
                        top: "0",
                    }, 300);

                    //$('.mobile-toolbar__counter').css('display','block');
                }
                $('#cart .cab-prices').load('index.php?route=checkout/cart/info .cab-prices > *');
                let category = $(element).parents('.col-main').find('.question-price');
                // let category_wrapper =  $(element).parents('.col-main').find('.swiper-wrapper');
                let category_id = category.data('category');
                category.load('index.php?route=checkout/cart/info .question-price[data-category="' + category_id + '"] > *');
                // if(json['total'] <= 0) {
                //     category_wrapper.load('index.php?route=checkout/cart/info .swiper-wrapper[data-category="' + category_id + '"] > *');
                // }
                if (remove) {
                    $(element).parents('.swiper-slide').remove();
                }

                // setTimeout(function () {
                //     $('.load__preloader').fadeOut("slow");
                // }, 500);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
        // });
    }
}

let couponator = {
    'show': function (category_id = 0) {
        $('body').css('overflow', 'hidden');
        $.ajax({
            url: '/index.php?route=common/couponator/info',
            type: 'post',
            data: 'category_id=' + category_id,
            success: function (data) {
                $('.coupon-window__container').html(data);
                $('.coupon-window').css('display', 'block');
                setTimeout(function(){
                    $('.coupon-window').css('opacity', 1);
                }, 100);
                $('.coupon-roulette__list').animate({'opacity': 1});
                $('.coupon-roulette__background').animate({'opacity': 1});
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
        return false;
    },
    'hide': function () {
        $('body').css('overflow', 'visible');
        $('.coupon-window').css('opacity', 0);
        setTimeout(function(){
            $('.coupon-window').css('display', 'none');
        }, 500);
    },
    'generate': function (category_id = 0) {
        $('.coupon-roulette__list').css({'opacity': 0});
        $('.coupon-roulette__bottom').css({'opacity': 0});
        $.ajax({
            url: '/index.php?route=common/couponator/generate',
            type: 'post',
            data: 'category_id=' + category_id,
            success: function (data) {
                const html = $(data).find('.coupon-roulette__list').html();
                const bottomHtml = $(data).find('.coupon-roulette__bottom').html();
                $('.coupon-roulette__list').html(html);
                $('.coupon-roulette__list').animate({'opacity': 1});
                $('.coupon-roulette__bottom').html(bottomHtml);
                $('.coupon-roulette__bottom').animate({'opacity': 1});
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
        return false;
    },
    'select': function (coupon_id = 0) {
        $('.coupon-window__container').css({'opacity': 0});
        $.ajax({
            url: '/index.php?route=common/couponator/select',
            type: 'post',
            data: 'coupon_id=' + coupon_id,
            success: function (data) {
                $('.coupon-window__container').html(data);
                $('.coupon-window__container').animate({'opacity': 1});
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
        return false;
    },
    'back': function () {
        $('.coupon-window__container').css({'opacity': 0});
        $.ajax({
            url: '/index.php?route=common/couponator/back',
            success: function (data) {
                $('.coupon-window__container').html(data);
                $('.coupon-window__container').css({'opacity': 1});
                $('.coupon-roulette__list').animate({'opacity': 1});
                $('.coupon-roulette__background').animate({'opacity': 1});
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
        return false;
    }
}

$(document).ready(function () {
    $('.mobile-dom-add').on('click', function () {
        $(this).fadeOut();
    })

    $(document).on('keyup', function (evt) {
        if (evt.keyCode == 27) {
            $('body').css('overflow', 'visible');
            $('.coupon-window').css('opacity', 0);
            setTimeout(function(){
                $('.coupon-window').css('display', 'none');
            }, 500);
        }
    });

    $(document).on("submit", ".coupon-form__form", function (e) {
        e.preventDefault();
        $('.coupon-window__container').css({'opacity': 0});
        const th = $(this);
        $.ajax({
            type: "POST",
            url: '/index.php?route=common/couponator/submit',
            data: th.serialize(),
            dataType: 'json',
        }).done(function (json) {
            if (json['html']) {
                $('.coupon-window__container').html(json['html']);
                $('.coupon-window__container').css({'opacity': 1});
            }
        });
        return false;
    });

    let hours = new Date().getHours();
    if(hours>17 || hours<6) $('.couponator-banner').addClass('black');
    setTimeout(function(){
        $.ajax({
            type: "POST",
            url: '/index.php?route=common/couponator/closebottombanner',
            data: {'get': 1},
            dataType: 'json',
        }).done(function (json) {
            if(json['closed']) {
                $('.coupon-button').addClass('visible');
            }
            else {
                setTimeout(function(){$('.couponator-banner').addClass('visible');}, 1000);
            }
        });
    }, 1000);

     $('.cb-close').on('click', function(){
         $.ajax({
             type: "POST",
             url: '/index.php?route=common/couponator/closebottombanner',
             data: {'close': 1},
             dataType: 'json',
         });
         window.event.stopPropagation();
         $('.couponator-banner').removeClass('visible');
         $('.coupon-button').addClass('visible');
     });

});
