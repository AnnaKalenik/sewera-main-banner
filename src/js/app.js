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