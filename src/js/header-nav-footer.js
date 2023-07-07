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