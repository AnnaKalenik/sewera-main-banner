document.addEventListener('DOMContentLoaded', () => {
    // Tooltip
    function toggleTooltip() {
        let icon = document.querySelector('.product-page__tooltip-icon');
        let textBlock = document.querySelector('.product-page__tooltip-text');

        const toggle = () => {
            icon.classList.toggle('product-page__tooltip-icon_active');
            textBlock.classList.toggle('product-page__tooltip-text_active');
        }

        if (icon) {
            icon.addEventListener('click', (e) => {
                e.stopPropagation();

                toggle();
            });

            document.addEventListener('click', (e) => {
                let target = e.target;
                let its_textBlock = target == textBlock || textBlock.contains(target);
                let textBlock_is_active = textBlock.classList.contains('product-page__tooltip-text_active');

                if (!its_textBlock && textBlock_is_active) {
                    toggle();
                }
            })
        }
    }
    toggleTooltip();

    // Modification
    function toggleBtnModific() {
        if(document.querySelector('.product-page__modific-list1')) {
            let list1 = document.querySelectorAll('.product-page__modific-list1 .product-page__modific-item');
            list1.forEach(item => {
                item.addEventListener('click', () => {
                    list1.forEach(item => item.classList.remove('product-page__modific-item_active'));
                    item.classList.add('product-page__modific-item_active');
                })
            });
        }

        if(document.querySelector('.product-page__modific-list2')) {
            let list2 = document.querySelectorAll('.product-page__modific-list2 .product-page__modific-item');

            list2.forEach(item => {
                item.addEventListener('click', () => {
                    list2.forEach(item => item.classList.remove('product-page__modific-item_active'));
                    item.classList.add('product-page__modific-item_active');
                })
            });
        }
    }
    toggleBtnModific();

    // Specification
    function btnAllSpecific() {
        if (document.querySelector('.product-page__specific-btn')) {
            let btn = document.querySelector('.product-page__specific-btn');
            let tabWrap = document.querySelector('.product-page__tabs-wrap');
            let tab = document.querySelectorAll('.product-page__triggers-item')[1];

            btn.addEventListener('click', () => {
                tabWrap.scrollIntoView({ behavior: 'smooth', block: "start" });
                tab.click();
            })
        }
    }
    btnAllSpecific();

    // Tabs
    function toggleTabs() {
        if(document.querySelector('.product-page__triggers-item')) {
            let tabList = document.querySelectorAll('.product-page__triggers-item');
            let contentList = document.querySelectorAll('.product-page__content-item');

            tabList.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const id = e.target.getAttribute('href').replace('#', '');

                    tabList.forEach(item => item.classList.remove('product-page__triggers-item_active'));
                    contentList.forEach(item => item.classList.remove('product-page__content-item_active'));

                    item.classList.add('product-page__triggers-item_active');
                    document.getElementById(id).classList.add('product-page__content-item_active');
                })
            })

            if (document.querySelector('.product-page__triggers-item')) {
                document.querySelector('.product-page__triggers-item').click();
            }
        }
    }

    toggleTabs();

    function countProducts() {
        if(document.querySelector('.product-page__input')) {
            const btnsPlus = document.querySelectorAll('.product-page__plus');
            const btnsMinus = document.querySelectorAll('.product-page__minus');
            const inputs = document.querySelectorAll('.product-page__input');
            let productPrice = document.querySelector('.product-page__new')

            btnsPlus.forEach(btn => btn.addEventListener("click", () => {
                let input = btn.closest('.product-page__amount').querySelector('.product-page__input');
                input.value = Number(input.value) + 1;

                productPrice.innerText = (Number(productPrice.dataset.price) * input.value).toLocaleString() + ' ' + productPrice.dataset.currency

                if(document.querySelector('.product-page__old')){
                    let oldPrice = document.querySelector('.product-page__old')
                    oldPrice.innerText = (Number(oldPrice.dataset.price) * input.value).toLocaleString() + ' ' + oldPrice.dataset.currency
                }
            }))

            btnsMinus.forEach(btn => btn.addEventListener("click", () => {
                let input = btn.closest('.product-page__amount').querySelector('.product-page__input');

                if(input.value <= 1) return;
                input.value = Number(input.value) - 1;

                productPrice.innerText = (Number(productPrice.dataset.price) * input.value).toLocaleString() + ' ' + productPrice.dataset.currency
                if(document.querySelector('.product-page__old')){
                    let oldPrice = document.querySelector('.product-page__old')
                    oldPrice.innerText = (Number(oldPrice.dataset.price) * input.value).toLocaleString() + ' ' + oldPrice.dataset.currency
                }
            }))

            inputs.forEach(input => input.addEventListener("change", () => {
                if(input.value <= 1) input.value = 1;
                input.value = Math.ceil(input.value);

                productPrice.innerText = (Number(productPrice.dataset.price) * input.value).toLocaleString() + ' ' + productPrice.dataset.currency
                if(document.querySelector('.product-page__old')){
                    let oldPrice = document.querySelector('.product-page__old')
                    oldPrice.innerText = (Number(oldPrice.dataset.price) * input.value).toLocaleString() + ' ' + oldPrice.dataset.currency
                }
            }))
            // productPrice.
        }
    }

    countProducts();

    // const tabFeedbacks = document.getElementById('tab-4');
    //
    // function openForm() {
    //     if (tabFeedbacks) {
    // 		const btn = document.querySelector('.product-feedbacks__btn-green');
    // 		const blockBtn = document.querySelector('.product-feedbacks__btn-block');
    // 		const blockForm = document.querySelector('.product-feedbacks__form');
    //
    // 		btn.addEventListener('click', () => {
    //             blockForm.classList.add('product-feedbacks__form_open');
    //             blockBtn.classList.add('product-feedbacks__btn-block_hidden');
    // 		});
    //
    //         form();
    // 	}
    // }
    //
    // openForm();
    //
    // function form() {
    //
    //     if (tabFeedbacks) {
    // 		const inputImage = document.querySelector('#formFileReview');
    // 		const preview = document.querySelector('#output');
    //
    // 		inputImage.addEventListener('change', () => {
    //             let count = inputImage.files.length;
    // 			uploadFile(count);
    // 			preview.addEventListener('DOMSubtreeModified', deletePhoto);
    // 		});
    //
    // 		function uploadFile (count) {
    // 			preview.innerHTML = `
    //                 <div class="form__count-files">
    //                     Загружено файлов: ${count}
    // 			        <button type="button" class="form__delete">Удалить</button>
    //                 </div>
    // 			`;
    // 		}
    //
    //         //удаление изображения
    // 	    function deletePhoto() {
    // 	    	const btnDelete = document.querySelector('.form__delete');
    // 	    	if(btnDelete) {
    // 	    		btnDelete.addEventListener('click', () => {
    // 	    			preview.innerHTML = '';
    // 	    			inputImage.value = '';
    // 	    		})
    // 	    	}
    // 	    }
    // 	}
    // }
    //
    // form();
    //
    // function btnExpand() {
    //     if (tabFeedbacks) {
    //         const feedbacksList = document.querySelectorAll('.product-feedbacks__review');
    //
    //         feedbacksList.forEach(feedback => {
    //             const scrollElem = feedback.querySelector('.product-feedbacks__rating');
    //             const textBlock = feedback.querySelector('.product-feedbacks__text-block');
    //             const btn = feedback.querySelector('.product-feedbacks__btn-expand');
    //
    //             if (textBlock !== null || btn !== null && textBlock.offsetHeight > 265) {
    //                 btn.classList.add('product-feedbacks__btn-expand_active');
    //             }
    //
    //             if (btn !== null && btn.classList.contains('product-feedbacks__btn-expand_active')) {
    //                 btn.addEventListener("click", () => {
    //                     textBlock.classList.toggle('open');
    //
    //                     if(textBlock.classList.contains('open')) {
    //                         btn.innerHTML = 'Свернуть отзыв';
    //                     } else {
    //                         btn.innerHTML = 'Показать полностью';
    //                         scrollElem.scrollIntoView({block: "center", behavior: "smooth"});
    //                     }
    //                 })
    //             }
    //         });
    //     }
    // }
    //
    // btnExpand();

    const galleryThumbsProduct = new Swiper('.product-page__gallery-nav .swiper', {
        spaceBetween: 0,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        breakpoints: {
            320: {
                spaceBetween: 21.51,
            },
            1021: {
                spaceBetween: 23.01,
            },
            1351: {
                spaceBetween: 32.76,
            }
        },
    });

    const galleryTopProduct = new Swiper('.product-page__gallery-for .swiper', {
        spaceBetween: 0,
        navigation: {nextEl: '.product-page__gallery-nav .swiper-button.next', prevEl: '.product-page__gallery-nav .swiper-button.prev',},
        thumbs: {swiper: galleryThumbsProduct}
    });

    const tabsSlider = new Swiper('.product-page__tabs', {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 0,

        breakpoints: {
            320: {
                grabCursor: true,
                allowTouchMove: true,
            },
            1021: {
                grabCursor: false,
                allowTouchMove: false,
            }
        },
    });

    // document.querySelectorAll('.product-feedbacks__slider-wrap').forEach(slider => {
    //     new Swiper(slider.querySelector('.swiper'), {
    //         loop: false,
    //         allowTouchMove: true,
    //
    //         breakpoints: {
    //             320: {
    //                 slidesPerView: 4,
    //                 spaceBetween: 3.61,
    //             },
    //             483: {
    //                 slidesPerView: 5,
    //                 spaceBetween: 17.67,
    //             },
    //             605: {
    //                 slidesPerView: 6,
    //                 spaceBetween: 17.67,
    //             },
    //             686: {
    //                 slidesPerView: 7,
    //                 spaceBetween: 17.67,
    //             },
    //             768: {
    //                 slidesPerView: 8,
    //                 spaceBetween: 17.67,
    //             },
    //             1021: {
    //                 slidesPerView: 9,
    //                 spaceBetween: 11,
    //             },
    //             1351: {
    //                 slidesPerView: 10,
    //                 spaceBetween: 25.91,
    //             }
    //         },
    //
    //         navigation: {
    //             nextEl: slider.querySelector('.swiper-button.next'),
    //             prevEl: slider.querySelector('.swiper-button.prev'),
    //         },
    //     });
    // });
})

function productReviewPagination(page, product_id) {
    let url = `/index.php?route=product/product/review&page=${page}&product_id=${product_id}`

    $('#tab-4').load(url, function () {
        console.log('Загружен')

        document.querySelectorAll('.product-feedbacks__review').forEach((elem) => {
            if (elem.querySelector('.product-feedbacks__text-block')) {
                const btn = elem.querySelector('.product-feedbacks__btn-expand');
                if (elem.querySelector('.product-feedbacks__text-block') && elem.querySelector('.product-feedbacks__text-block').offsetHeight <= 240) {
                    btn.style.display = 'none'
                }else{
                    btn.style.display = 'block'
                }
            }
        })
    });
}

function sendFormProductReview(){
    let formProductReview = document.getElementById('product-form-review')

    let files = document.getElementById('formFileReview').files

    let formData = new FormData(formProductReview);

    formData.append('images[]', files)

    let url = '/index.php?route=product/product/add_review'

    formProductReview.querySelector('button').disabled = "disabled"

    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(formData)

    xhr.onload = () => {
        let result = xhr.response
        result = JSON.parse(result)

        formProductReview.querySelector('button').disabled = "disabled"

        let formReview = document.getElementById('product-review-wrap')

        if(result['success']){
            document.getElementById('form-review-error').style.display = "none"
            document.getElementById('product-review-wrap').insertAdjacentHTML('afterbegin', result['success'])

            formProductReview.querySelectorAll('input[type="text"]').forEach((elem)=>{
                elem.value = ''
            })

            formProductReview.querySelectorAll('textarea').forEach((elem)=>{
                elem.value = ''
                elem.innerHTML = ''
            })

            document.querySelector('.product-page__triggers-score').innerText = Number(document.querySelector('.product-page__triggers-score').innerText) + 1

            document.querySelectorAll('.product-feedbacks__slider-wrap').forEach(slider => {
                new Swiper(slider.querySelector('.swiper'), {
                    loop: false,
                    allowTouchMove: true,

                    breakpoints: {
                        320: {
                            slidesPerView: 4,
                            spaceBetween: 3.61,
                        },
                        483: {
                            slidesPerView: 5,
                            spaceBetween: 17.67,
                        },
                        605: {
                            slidesPerView: 6,
                            spaceBetween: 17.67,
                        },
                        686: {
                            slidesPerView: 7,
                            spaceBetween: 17.67,
                        },
                        768: {
                            slidesPerView: 8,
                            spaceBetween: 17.67,
                        },
                        1021: {
                            slidesPerView: 9,
                            spaceBetween: 11,
                        },
                        1351: {
                            slidesPerView: 10,
                            spaceBetween: 25.91,
                        }
                    },

                    navigation: {
                        nextEl: slider.querySelector('.swiper-button.next'),
                        prevEl: slider.querySelector('.swiper-button.prev'),
                    },
                });
            });

            document.querySelector('.product-feedbacks__form').classList.remove('product-feedbacks__form_open')

                const feedbacksList = document.querySelectorAll('.product-feedbacks__review');
                feedbacksList.forEach((elem) => {
                    if (elem.querySelector('.product-feedbacks__text-block')) {
                        const btn = elem.querySelector('.product-feedbacks__btn-expand');
                        if (elem.querySelector('.product-feedbacks__text-block') && elem.querySelector('.product-feedbacks__text-block').offsetHeight <= 240) {
                            btn.style.display = 'none'
                        }else if(elem.querySelector('.product-feedbacks__text-block')){
                            btn.style.display = 'block'

                            const scrollElem = elem.querySelector('.product-feedbacks__text-block');
                            btn.addEventListener("click", () => {
                                scrollElem.classList.toggle('open');

                                if(scrollElem.classList.contains('open')) {
                                    btn.innerHTML = 'Свернуть отзыв';
                                } else {
                                    btn.innerHTML = 'Показать полностью';
                                    scrollElem.scrollIntoView({block: "center", behavior: "smooth"});
                                }
                            })
                        }
                    }
                })

        }else{
            if (result['error']){
                document.getElementById('form-review-error').style.display = "block"
                document.getElementById('form-review-error').innerText = result['error']
            }
            formProductReview.querySelector('button').disabled = false
        }
    };

    xhr.onprogress = () => {
        console.log('Загрузка')
    }

    xhr.onerror = () => {
        load = false
        document.querySelector('.loader').classList.remove('active')
        console.log('Ошибка', xhr.status)
    }
}

function sortHrefLinks(btn){
    let currentUrl = btn.dataset.sortHref
    let currentUrlHref = new URL(btn.dataset.sortHref);
    let currentUrlAsc = btn.dataset.sortDataHref;
    let currentUrlAscHref = new URL(btn.dataset.sortDataHref);
    let url = window.location.href;
    let urlHref = new URL(window.location.href);
    let order = urlHref.searchParams.get('order')


    if(currentUrlHref.href == urlHref.href || currentUrlAscHref.href == urlHref.href){

        if(order == "DESC"){
            order = 'ASC'
        }else{
            order = 'DESC'
        }
        if(localStorage.getItem('order') == "DESC"){
            localStorage.setItem('order', 'ASC')
            window.location.href = currentUrlAsc
        }else{
            localStorage.setItem('order', 'DESC')
            window.location.href = currentUrl
        }

        url.searchParams.set('order', order)


        window.location.href = url
    }else if(localStorage.getItem('order')){

        if(order == 'null'){
            localStorage.setItem('order', 'ASC')
            window.location.href = currentUrlAsc
        }else{
            if(localStorage.getItem('order') == 'DESC'){
                window.location.href = currentUrl
            }else{
                window.location.href = currentUrlAsc
            }
        }

    }else{
        window.location.href = currentUrl
    }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIC8vIFRvb2x0aXBcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRvb2x0aXAoKSB7XHJcbiAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1wYWdlX190b29sdGlwLWljb24nKTtcclxuICAgICAgICBsZXQgdGV4dEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtcGFnZV9fdG9vbHRpcC10ZXh0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdwcm9kdWN0LXBhZ2VfX3Rvb2x0aXAtaWNvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgdGV4dEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ3Byb2R1Y3QtcGFnZV9fdG9vbHRpcC10ZXh0X2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBpdHNfdGV4dEJsb2NrID0gdGFyZ2V0ID09IHRleHRCbG9jayB8fCB0ZXh0QmxvY2suY29udGFpbnModGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0QmxvY2tfaXNfYWN0aXZlID0gdGV4dEJsb2NrLmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1wYWdlX190b29sdGlwLXRleHRfYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpdHNfdGV4dEJsb2NrICYmIHRleHRCbG9ja19pc19hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2dnbGVUb29sdGlwKCk7XHJcblxyXG4gICAgLy8gTW9kaWZpY2F0aW9uXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVCdG5Nb2RpZmljKCkge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX21vZGlmaWMtbGlzdDEnKSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1wYWdlX19tb2RpZmljLWxpc3QxIC5wcm9kdWN0LXBhZ2VfX21vZGlmaWMtaXRlbScpO1xyXG4gICAgICAgICAgICBsaXN0MS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0MS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LXBhZ2VfX21vZGlmaWMtaXRlbV9hY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXBhZ2VfX21vZGlmaWMtaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtcGFnZV9fbW9kaWZpYy1saXN0MicpKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXBhZ2VfX21vZGlmaWMtbGlzdDIgLnByb2R1Y3QtcGFnZV9fbW9kaWZpYy1pdGVtJyk7XHJcblxyXG4gICAgICAgICAgICBsaXN0Mi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0Mi5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LXBhZ2VfX21vZGlmaWMtaXRlbV9hY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXBhZ2VfX21vZGlmaWMtaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvZ2dsZUJ0bk1vZGlmaWMoKTtcclxuXHJcbiAgICAvLyBTcGVjaWZpY2F0aW9uXHJcbiAgICBmdW5jdGlvbiBidG5BbGxTcGVjaWZpYygpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtcGFnZV9fc3BlY2lmaWMtYnRuJykpIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX3NwZWNpZmljLWJ0bicpO1xyXG4gICAgICAgICAgICBsZXQgdGFiV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX3RhYnMtd3JhcCcpO1xyXG4gICAgICAgICAgICBsZXQgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtcGFnZV9fdHJpZ2dlcnMtaXRlbScpWzFdO1xyXG5cclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFiV3JhcC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6IFwic3RhcnRcIiB9KTtcclxuICAgICAgICAgICAgICAgIHRhYi5jbGljaygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ0bkFsbFNwZWNpZmljKCk7XHJcblxyXG4gICAgLy8gVGFic1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFicygpIHtcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1wYWdlX190cmlnZ2Vycy1pdGVtJykpIHtcclxuICAgICAgICAgICAgbGV0IHRhYkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1wYWdlX190cmlnZ2Vycy1pdGVtJyk7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXBhZ2VfX2NvbnRlbnQtaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgdGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykucmVwbGFjZSgnIycsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LXBhZ2VfX3RyaWdnZXJzLWl0ZW1fYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3QtcGFnZV9fY29udGVudC1pdGVtX2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXBhZ2VfX3RyaWdnZXJzLWl0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtcGFnZV9fY29udGVudC1pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1wYWdlX190cmlnZ2Vycy1pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX3RyaWdnZXJzLWl0ZW0nKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRhYnMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb3VudFByb2R1Y3RzKCkge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX2lucHV0JykpIHtcclxuICAgICAgICAgICAgY29uc3QgYnRuc1BsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1wYWdlX19wbHVzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bnNNaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXBhZ2VfX21pbnVzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXBhZ2VfX2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1wYWdlX19uZXcnKVxyXG5cclxuICAgICAgICAgICAgYnRuc1BsdXMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBidG4uY2xvc2VzdCgnLnByb2R1Y3QtcGFnZV9fYW1vdW50JykucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtcGFnZV9faW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gTnVtYmVyKGlucHV0LnZhbHVlKSArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlLmlubmVyVGV4dCA9IChOdW1iZXIocHJvZHVjdFByaWNlLmRhdGFzZXQucHJpY2UpICogaW5wdXQudmFsdWUpLnRvTG9jYWxlU3RyaW5nKCkgKyAnICcgKyBwcm9kdWN0UHJpY2UuZGF0YXNldC5jdXJyZW5jeVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX29sZCcpKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1wYWdlX19vbGQnKVxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFByaWNlLmlubmVyVGV4dCA9IChOdW1iZXIob2xkUHJpY2UuZGF0YXNldC5wcmljZSkgKiBpbnB1dC52YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKSArICcgJyArIG9sZFByaWNlLmRhdGFzZXQuY3VycmVuY3lcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICBidG5zTWludXMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBidG4uY2xvc2VzdCgnLnByb2R1Y3QtcGFnZV9fYW1vdW50JykucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtcGFnZV9faW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dC52YWx1ZSA8PSAxKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSkgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZS5pbm5lclRleHQgPSAoTnVtYmVyKHByb2R1Y3RQcmljZS5kYXRhc2V0LnByaWNlKSAqIGlucHV0LnZhbHVlKS50b0xvY2FsZVN0cmluZygpICsgJyAnICsgcHJvZHVjdFByaWNlLmRhdGFzZXQuY3VycmVuY3lcclxuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX29sZCcpKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1wYWdlX19vbGQnKVxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFByaWNlLmlubmVyVGV4dCA9IChOdW1iZXIob2xkUHJpY2UuZGF0YXNldC5wcmljZSkgKiBpbnB1dC52YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKSArICcgJyArIG9sZFByaWNlLmRhdGFzZXQuY3VycmVuY3lcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlIDw9IDEpIGlucHV0LnZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gTWF0aC5jZWlsKGlucHV0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2UuaW5uZXJUZXh0ID0gKE51bWJlcihwcm9kdWN0UHJpY2UuZGF0YXNldC5wcmljZSkgKiBpbnB1dC52YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKSArICcgJyArIHByb2R1Y3RQcmljZS5kYXRhc2V0LmN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1wYWdlX19vbGQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtcGFnZV9fb2xkJylcclxuICAgICAgICAgICAgICAgICAgICBvbGRQcmljZS5pbm5lclRleHQgPSAoTnVtYmVyKG9sZFByaWNlLmRhdGFzZXQucHJpY2UpICogaW5wdXQudmFsdWUpLnRvTG9jYWxlU3RyaW5nKCkgKyAnICcgKyBvbGRQcmljZS5kYXRhc2V0LmN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAvLyBwcm9kdWN0UHJpY2UuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50UHJvZHVjdHMoKTtcclxuXHJcbiAgICAvLyBjb25zdCB0YWJGZWVkYmFja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLTQnKTtcclxuICAgIC8vXHJcbiAgICAvLyBmdW5jdGlvbiBvcGVuRm9ybSgpIHtcclxuICAgIC8vICAgICBpZiAodGFiRmVlZGJhY2tzKSB7XHJcbiAgICAvLyBcdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX19idG4tZ3JlZW4nKTtcclxuICAgIC8vIFx0XHRjb25zdCBibG9ja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWZlZWRiYWNrc19fYnRuLWJsb2NrJyk7XHJcbiAgICAvLyBcdFx0Y29uc3QgYmxvY2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX19mb3JtJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGJsb2NrRm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWZlZWRiYWNrc19fZm9ybV9vcGVuJyk7XHJcbiAgICAvLyAgICAgICAgICAgICBibG9ja0J0bi5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWZlZWRiYWNrc19fYnRuLWJsb2NrX2hpZGRlbicpO1xyXG4gICAgLy8gXHRcdH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgZm9ybSgpO1xyXG4gICAgLy8gXHR9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gb3BlbkZvcm0oKTtcclxuICAgIC8vXHJcbiAgICAvLyBmdW5jdGlvbiBmb3JtKCkge1xyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAodGFiRmVlZGJhY2tzKSB7XHJcbiAgICAvLyBcdFx0Y29uc3QgaW5wdXRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtRmlsZVJldmlldycpO1xyXG4gICAgLy8gXHRcdGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3V0cHV0Jyk7XHJcbiAgICAvL1xyXG4gICAgLy8gXHRcdGlucHV0SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNvdW50ID0gaW5wdXRJbWFnZS5maWxlcy5sZW5ndGg7XHJcbiAgICAvLyBcdFx0XHR1cGxvYWRGaWxlKGNvdW50KTtcclxuICAgIC8vIFx0XHRcdHByZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgZGVsZXRlUGhvdG8pO1xyXG4gICAgLy8gXHRcdH0pO1xyXG4gICAgLy9cclxuICAgIC8vIFx0XHRmdW5jdGlvbiB1cGxvYWRGaWxlIChjb3VudCkge1xyXG4gICAgLy8gXHRcdFx0cHJldmlldy5pbm5lckhUTUwgPSBgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2NvdW50LWZpbGVzXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgINCX0LDQs9GA0YPQttC10L3QviDRhNCw0LnQu9C+0LI6ICR7Y291bnR9XHJcbiAgICAvLyBcdFx0XHQgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybV9fZGVsZXRlXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vIFx0XHRcdGA7XHJcbiAgICAvLyBcdFx0fVxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgLy/Rg9C00LDQu9C10L3QuNC1INC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxuICAgIC8vIFx0ICAgIGZ1bmN0aW9uIGRlbGV0ZVBob3RvKCkge1xyXG4gICAgLy8gXHQgICAgXHRjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZGVsZXRlJyk7XHJcbiAgICAvLyBcdCAgICBcdGlmKGJ0bkRlbGV0ZSkge1xyXG4gICAgLy8gXHQgICAgXHRcdGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIFx0ICAgIFx0XHRcdHByZXZpZXcuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyBcdCAgICBcdFx0XHRpbnB1dEltYWdlLnZhbHVlID0gJyc7XHJcbiAgICAvLyBcdCAgICBcdFx0fSlcclxuICAgIC8vIFx0ICAgIFx0fVxyXG4gICAgLy8gXHQgICAgfVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZm9ybSgpO1xyXG4gICAgLy9cclxuICAgIC8vIGZ1bmN0aW9uIGJ0bkV4cGFuZCgpIHtcclxuICAgIC8vICAgICBpZiAodGFiRmVlZGJhY2tzKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGZlZWRiYWNrc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1mZWVkYmFja3NfX3JldmlldycpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgZmVlZGJhY2tzTGlzdC5mb3JFYWNoKGZlZWRiYWNrID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEVsZW0gPSBmZWVkYmFjay5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1mZWVkYmFja3NfX3JhdGluZycpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgdGV4dEJsb2NrID0gZmVlZGJhY2sucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX190ZXh0LWJsb2NrJyk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBidG4gPSBmZWVkYmFjay5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1mZWVkYmFja3NfX2J0bi1leHBhbmQnKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGV4dEJsb2NrICE9PSBudWxsIHx8IGJ0biAhPT0gbnVsbCAmJiB0ZXh0QmxvY2sub2Zmc2V0SGVpZ2h0ID4gMjY1KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtZmVlZGJhY2tzX19idG4tZXhwYW5kX2FjdGl2ZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGlmIChidG4gIT09IG51bGwgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1mZWVkYmFja3NfX2J0bi1leHBhbmRfYWN0aXZlJykpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGV4dEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHRleHRCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICfQodCy0LXRgNC90YPRgtGMINC+0YLQt9GL0LInO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICfQn9C+0LrQsNC30LDRgtGMINC/0L7Qu9C90L7RgdGC0YzRjic7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxFbGVtLnNjcm9sbEludG9WaWV3KHtibG9jazogXCJjZW50ZXJcIiwgYmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBidG5FeHBhbmQoKTtcclxuXHJcbiAgICBjb25zdCBnYWxsZXJ5VGh1bWJzUHJvZHVjdCA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LXBhZ2VfX2dhbGxlcnktbmF2IC5zd2lwZXInLCB7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMS41MSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyMToge1xyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMy4wMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTM1MToge1xyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMi43NixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnYWxsZXJ5VG9wUHJvZHVjdCA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LXBhZ2VfX2dhbGxlcnktZm9yIC5zd2lwZXInLCB7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtuZXh0RWw6ICcucHJvZHVjdC1wYWdlX19nYWxsZXJ5LW5hdiAuc3dpcGVyLWJ1dHRvbi5uZXh0JywgcHJldkVsOiAnLnByb2R1Y3QtcGFnZV9fZ2FsbGVyeS1uYXYgLnN3aXBlci1idXR0b24ucHJldicsfSxcclxuICAgICAgICB0aHVtYnM6IHtzd2lwZXI6IGdhbGxlcnlUaHVtYnNQcm9kdWN0fVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGFic1NsaWRlciA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LXBhZ2VfX3RhYnMnLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG5cclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAyMToge1xyXG4gICAgICAgICAgICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZmVlZGJhY2tzX19zbGlkZXItd3JhcCcpLmZvckVhY2goc2xpZGVyID0+IHtcclxuICAgIC8vICAgICBuZXcgU3dpcGVyKHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJyksIHtcclxuICAgIC8vICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgIC8vICAgICAgICAgICAgIDMyMDoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzLjYxLFxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIDQ4Mzoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNy42NyxcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICA2MDU6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTcuNjcsXHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgNjg2OiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LjY3LFxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDgsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNy42NyxcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICAxMDIxOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogOSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDExLFxyXG4gICAgLy8gICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgIDEzNTE6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxMCxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDI1LjkxLFxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgLy8gICAgICAgICAgICAgbmV4dEVsOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnN3aXBlci1idXR0b24ubmV4dCcpLFxyXG4gICAgLy8gICAgICAgICAgICAgcHJldkVsOiBzbGlkZXIucXVlcnlTZWxlY3RvcignLnN3aXBlci1idXR0b24ucHJldicpLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0UmV2aWV3UGFnaW5hdGlvbihwYWdlLCBwcm9kdWN0X2lkKSB7XHJcbiAgICBsZXQgdXJsID0gYC9pbmRleC5waHA/cm91dGU9cHJvZHVjdC9wcm9kdWN0L3JldmlldyZwYWdlPSR7cGFnZX0mcHJvZHVjdF9pZD0ke3Byb2R1Y3RfaWR9YFxyXG5cclxuICAgICQoJyN0YWItNCcpLmxvYWQodXJsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ9CX0LDQs9GA0YPQttC10L0nKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1mZWVkYmFja3NfX3JldmlldycpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX190ZXh0LWJsb2NrJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGVsZW0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX19idG4tZXhwYW5kJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1mZWVkYmFja3NfX3RleHQtYmxvY2snKSAmJiBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWZlZWRiYWNrc19fdGV4dC1ibG9jaycpLm9mZnNldEhlaWdodCA8PSAyNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRGb3JtUHJvZHVjdFJldmlldygpe1xyXG4gICAgbGV0IGZvcm1Qcm9kdWN0UmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZm9ybS1yZXZpZXcnKVxyXG5cclxuICAgIGxldCBmaWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRmlsZVJldmlldycpLmZpbGVzXHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1Qcm9kdWN0UmV2aWV3KTtcclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlc1tdJywgZmlsZXMpXHJcblxyXG4gICAgbGV0IHVybCA9ICcvaW5kZXgucGhwP3JvdXRlPXByb2R1Y3QvcHJvZHVjdC9hZGRfcmV2aWV3J1xyXG5cclxuICAgIGZvcm1Qcm9kdWN0UmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmRpc2FibGVkID0gXCJkaXNhYmxlZFwiXHJcblxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwpO1xyXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpXHJcblxyXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0geGhyLnJlc3BvbnNlXHJcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpXHJcblxyXG4gICAgICAgIGZvcm1Qcm9kdWN0UmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmRpc2FibGVkID0gXCJkaXNhYmxlZFwiXHJcblxyXG4gICAgICAgIGxldCBmb3JtUmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtcmV2aWV3LXdyYXAnKVxyXG5cclxuICAgICAgICBpZihyZXN1bHRbJ3N1Y2Nlc3MnXSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXJldmlldy1lcnJvcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1yZXZpZXctd3JhcCcpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHJlc3VsdFsnc3VjY2VzcyddKVxyXG5cclxuICAgICAgICAgICAgZm9ybVByb2R1Y3RSZXZpZXcucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInRleHRcIl0nKS5mb3JFYWNoKChlbGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgZWxlbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBmb3JtUHJvZHVjdFJldmlldy5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpLmZvckVhY2goKGVsZW0pPT57XHJcbiAgICAgICAgICAgICAgICBlbGVtLnZhbHVlID0gJydcclxuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX3RyaWdnZXJzLXNjb3JlJykuaW5uZXJUZXh0ID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXBhZ2VfX3RyaWdnZXJzLXNjb3JlJykuaW5uZXJUZXh0KSArIDFcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWZlZWRiYWNrc19fc2xpZGVyLXdyYXAnKS5mb3JFYWNoKHNsaWRlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXcgU3dpcGVyKHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJyksIHtcclxuICAgICAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzLjYxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0ODM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LjY3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2MDU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LjY3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2ODY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LjY3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LjY3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDIxOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTM1MToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDI1LjkxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWJ1dHRvbi5uZXh0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItYnV0dG9uLnByZXYnKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX19mb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC1mZWVkYmFja3NfX2Zvcm1fb3BlbicpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmVlZGJhY2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWZlZWRiYWNrc19fcmV2aWV3Jyk7XHJcbiAgICAgICAgICAgICAgICBmZWVkYmFja3NMaXN0LmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1mZWVkYmFja3NfX3RleHQtYmxvY2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWZlZWRiYWNrc19fYnRuLWV4cGFuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1mZWVkYmFja3NfX3RleHQtYmxvY2snKSAmJiBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWZlZWRiYWNrc19fdGV4dC1ibG9jaycpLm9mZnNldEhlaWdodCA8PSAyNDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGVsZW0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX190ZXh0LWJsb2NrJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRWxlbSA9IGVsZW0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmVlZGJhY2tzX190ZXh0LWJsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxFbGVtLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Nyb2xsRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gJ9Ch0LLQtdGA0L3Rg9GC0Ywg0L7RgtC30YvQsic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICfQn9C+0LrQsNC30LDRgtGMINC/0L7Qu9C90L7RgdGC0YzRjic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsZW0uc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiBcImNlbnRlclwiLCBiZWhhdmlvcjogXCJzbW9vdGhcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFsnZXJyb3InXSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1yZXZpZXctZXJyb3InKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1yZXZpZXctZXJyb3InKS5pbm5lclRleHQgPSByZXN1bHRbJ2Vycm9yJ11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtUHJvZHVjdFJldmlldy5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0JfQsNCz0YDRg9C30LrQsCcpXHJcbiAgICB9XHJcblxyXG4gICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9hZCA9IGZhbHNlXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ9Ce0YjQuNCx0LrQsCcsIHhoci5zdGF0dXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRIcmVmTGlua3MoYnRuKXtcclxuICAgIGxldCBjdXJyZW50VXJsID0gYnRuLmRhdGFzZXQuc29ydEhyZWZcclxuICAgIGxldCBjdXJyZW50VXJsSHJlZiA9IG5ldyBVUkwoYnRuLmRhdGFzZXQuc29ydEhyZWYpO1xyXG4gICAgbGV0IGN1cnJlbnRVcmxBc2MgPSBidG4uZGF0YXNldC5zb3J0RGF0YUhyZWY7XHJcbiAgICBsZXQgY3VycmVudFVybEFzY0hyZWYgPSBuZXcgVVJMKGJ0bi5kYXRhc2V0LnNvcnREYXRhSHJlZik7XHJcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBsZXQgdXJsSHJlZiA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgbGV0IG9yZGVyID0gdXJsSHJlZi5zZWFyY2hQYXJhbXMuZ2V0KCdvcmRlcicpXHJcblxyXG5cclxuICAgIGlmKGN1cnJlbnRVcmxIcmVmLmhyZWYgPT0gdXJsSHJlZi5ocmVmIHx8IGN1cnJlbnRVcmxBc2NIcmVmLmhyZWYgPT0gdXJsSHJlZi5ocmVmKXtcclxuXHJcbiAgICAgICAgaWYob3JkZXIgPT0gXCJERVNDXCIpe1xyXG4gICAgICAgICAgICBvcmRlciA9ICdBU0MnXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG9yZGVyID0gJ0RFU0MnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpID09IFwiREVTQ1wiKXtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZGVyJywgJ0FTQycpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY3VycmVudFVybEFzY1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCAnREVTQycpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY3VycmVudFVybFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ29yZGVyJywgb3JkZXIpXHJcblxyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxyXG4gICAgfWVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpe1xyXG5cclxuICAgICAgICBpZihvcmRlciA9PSAnbnVsbCcpe1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCAnQVNDJylcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjdXJyZW50VXJsQXNjXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpID09ICdERVNDJyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGN1cnJlbnRVcmxcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGN1cnJlbnRVcmxBc2NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGN1cnJlbnRVcmxcclxuICAgIH1cclxuXHJcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9