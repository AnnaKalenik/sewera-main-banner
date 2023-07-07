document.addEventListener('DOMContentLoaded', () => {

    // появление окон в шапке
    if(document.querySelector('.nav__item')) {
        let navItems = document.querySelectorAll('.nav__item');
   
        navItems.forEach(item => {
            let count = 0;
  
            // клик по пунктам меню в шапке
            item.addEventListener('click', () => {
                if (item.classList.contains('nav__item_active')) {
                    item.classList.remove('nav__item_active');
                } else {
                    navItems.forEach(item => item.classList.remove('nav__item_active'));
                    item.classList.add('nav__item_active');
                }
            })

            // ховер по пунктам меню в шапке
            item.addEventListener('mouseover', () => {
                // проверка на наличие класса active
                navItems.forEach(item => {
                    if (item.classList.contains('nav__item_active')) count += 1;
                });

                // если открырытх окон нет, ховер срабатывает
                if (count === 0) {
                    item.classList.add('nav__item_hover');

                    item.addEventListener('mouseout', () => {
                        item.classList.remove('nav__item_hover');
                    })
                } 

                count = 0;
            })
        }) 

        document.addEventListener('click', (e) => {
            let navItem = e.target.closest('.nav__item');

            if(navItem === null) {
                navItems.forEach(item => item.classList.remove('nav__item_active'));
            } else return;
        })
    }

    // мобильное меню
	function toggleBurger() {
        const body = document.querySelector('body');
        const cover = document.querySelector('.mob-menu-cover');
        const btnsClose = document.querySelector('.mob-menu__btn-close');
		const mobMenu = document.querySelector('.mob-menu');
		const btnMenu = document.querySelector('.toolbar-mob__item_menu');
 	
		const toggleClasses = () => {
            btnMenu.classList.toggle('toolbar-mob__item_active');
			mobMenu.classList.toggle('mob-menu_open');
			cover.classList.toggle('mob-menu-cover_active');
			body.classList.toggle('mob-menu-open');
		}

        if (btnMenu) {
            btnMenu.addEventListener('click', toggleClasses);
        }

        if (cover) {
            cover.addEventListener('click', toggleClasses);
        }

        if (btnsClose) {
            btnsClose.addEventListener('click', toggleClasses);
        }
	}  
    toggleBurger();

    // аккордион
    if(document.querySelector('.accordion')) {
        const items = Array.from(document.querySelectorAll('.accordion'));

        items.forEach((item) => {
            item.addEventListener('click', (e) => {
                let currentHead = item.querySelector('.accordion__head');
                let currentBody = item.querySelector('.accordion__body');

                if (e.target === currentHead) {
                    if (currentBody.style.maxHeight) {
                        currentHead.classList.remove('accordion__head_open');
                        currentBody.style.maxHeight = null;
                    } else {
                        items.forEach((item) => {
                            item.querySelector('.accordion__head').classList.remove('accordion__head_open');
                            item.querySelector('.accordion__body').style.maxHeight = null;
                        })

                        currentHead.classList.add('accordion__head_open');
                        currentBody.style.maxHeight = currentBody.scrollHeight + 'px';
                    }
                }
            });
        });
    }

    // Появление сообщения после отправки номера
    if(document.querySelector('.call-back')) {
        const forms = Array.from(document.querySelectorAll('.call-back'));

        forms.forEach((form) => {
            form.querySelector('.call-back__btn').addEventListener('click', () => {
                form.querySelector('.call-back__wrap').classList.add('call-back__wrap_sent');
                form.querySelector('.call-back__text').classList.add('call-back__text_sent');
            })
        });
    }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXItbmF2LWZvb3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIC8vINC/0L7Rj9Cy0LvQtdC90LjQtSDQvtC60L7QvSDQsiDRiNCw0L/QutC1XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19pdGVtJykpIHtcclxuICAgICAgICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtJyk7XHJcbiAgIFxyXG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgXHJcbiAgICAgICAgICAgIC8vINC60LvQuNC6INC/0L4g0L/Rg9C90LrRgtCw0Lwg0LzQtdC90Y4g0LIg0YjQsNC/0LrQtVxyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2l0ZW1fYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vINGF0L7QstC10YAg0L/QviDQv9GD0L3QutGC0LDQvCDQvNC10L3RjiDQsiDRiNCw0L/QutC1XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINC90LDQu9C40YfQuNC1INC60LvQsNGB0YHQsCBhY3RpdmVcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2l0ZW1fYWN0aXZlJykpIGNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCDQvtGC0LrRgNGL0YDRi9GC0YUg0L7QutC+0L0g0L3QtdGCLCDRhdC+0LLQtdGAINGB0YDQsNCx0LDRgtGL0LLQsNC10YJcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtX2hvdmVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX2hvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYXZJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLm5hdl9faXRlbScpO1xyXG5cclxuICAgICAgICAgICAgaWYobmF2SXRlbSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHJldHVybjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vINC80L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG5cdGZ1bmN0aW9uIHRvZ2dsZUJ1cmdlcigpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYi1tZW51LWNvdmVyJyk7XHJcbiAgICAgICAgY29uc3QgYnRuc0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYi1tZW51X19idG4tY2xvc2UnKTtcclxuXHRcdGNvbnN0IG1vYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iLW1lbnUnKTtcclxuXHRcdGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci1tb2JfX2l0ZW1fbWVudScpO1xyXG4gXHRcclxuXHRcdGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgndG9vbGJhci1tb2JfX2l0ZW1fYWN0aXZlJyk7XHJcblx0XHRcdG1vYk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbW9iLW1lbnVfb3BlbicpO1xyXG5cdFx0XHRjb3Zlci5jbGFzc0xpc3QudG9nZ2xlKCdtb2ItbWVudS1jb3Zlcl9hY3RpdmUnKTtcclxuXHRcdFx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2ItbWVudS1vcGVuJyk7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIGlmIChidG5NZW51KSB7XHJcbiAgICAgICAgICAgIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDbGFzc2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3Zlcikge1xyXG4gICAgICAgICAgICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ0bnNDbG9zZSkge1xyXG4gICAgICAgICAgICBidG5zQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDbGFzc2VzKTtcclxuICAgICAgICB9XHJcblx0fSAgXHJcbiAgICB0b2dnbGVCdXJnZXIoKTtcclxuXHJcbiAgICAvLyDQsNC60LrQvtGA0LTQuNC+0L1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24nKSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uJykpO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRIZWFkID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19oZWFkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEJvZHkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2JvZHknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGN1cnJlbnRIZWFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCb2R5LnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SGVhZC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2hlYWRfb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qm9keS5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faGVhZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faGVhZF9vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2JvZHknKS5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19oZWFkX29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gY3VycmVudEJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0L7Rj9Cy0LvQtdC90LjQtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0L/QvtGB0LvQtSDQvtGC0L/RgNCw0LLQutC4INC90L7QvNC10YDQsFxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGwtYmFjaycpKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxsLWJhY2snKSk7XHJcblxyXG4gICAgICAgIGZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FsbC1iYWNrX19idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLmNhbGwtYmFja19fd3JhcCcpLmNsYXNzTGlzdC5hZGQoJ2NhbGwtYmFja19fd3JhcF9zZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYWxsLWJhY2tfX3RleHQnKS5jbGFzc0xpc3QuYWRkKCdjYWxsLWJhY2tfX3RleHRfc2VudCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkiXSwiZmlsZSI6ImhlYWRlci1uYXYtZm9vdGVyLmpzIn0=