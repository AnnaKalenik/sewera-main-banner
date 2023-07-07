document.addEventListener('DOMContentLoaded', () => {
    function accordionToggle() {
        if(document.querySelector('.table-block__item')) {
            const items = Array.from(document.querySelectorAll('.table-block__item'));

            items.forEach((item) => {
                item.addEventListener('click', (e) => {
                    let currentHead = item.querySelector('.table-block__head');
                    let currentContentList = item.querySelectorAll('.table-block__body-content');

                    if (e.target.closest('.table-block__head') || e.target.closest('.table-block__body')) {
                        currentHead.classList.toggle('open');

                        currentContentList.forEach((content) => {
                            if (content.style.maxHeight) {
                                content.style.maxHeight = null;
                                content.classList.remove('open');
                            } else {
                                content.style.maxHeight = content.scrollHeight + 'px';
                                content.classList.add('open');
                            }
                        })
                    }
                });
            });
        }
    }
    accordionToggle();
})


document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.popular-services__item .swiper', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.popular-services__next',
            prevEl: '.popular-services__prev',
        },
        pagination: {
            el: '.popular-services__dots',
            type: 'bullets',
        },
    });
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBhY2NvcmRpb25Ub2dnbGUoKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLWJsb2NrX19pdGVtJykpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZS1ibG9ja19faXRlbScpKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SGVhZCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnRhYmxlLWJsb2NrX19oZWFkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb250ZW50TGlzdCA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlLWJsb2NrX19ib2R5LWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy50YWJsZS1ibG9ja19faGVhZCcpIHx8IGUudGFyZ2V0LmNsb3Nlc3QoJy50YWJsZS1ibG9ja19fYm9keScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50TGlzdC5mb3JFYWNoKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhY2NvcmRpb25Ub2dnbGUoKTtcclxufSlcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbmV3IFN3aXBlcignLnBvcHVsYXItc2VydmljZXNfX2l0ZW0gLnN3aXBlcicsIHtcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5wb3B1bGFyLXNlcnZpY2VzX19uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnBvcHVsYXItc2VydmljZXNfX3ByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5wb3B1bGFyLXNlcnZpY2VzX19kb3RzJyxcclxuICAgICAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSlcclxuIl0sImZpbGUiOiJtb2RzLmpzIn0=
