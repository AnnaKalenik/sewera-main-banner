(function () {
  if (window.innerWidth < 768) {
    document.addEventListener("DOMContentLoaded", () => {
      const body = document.querySelector('body');
      const panel = document.querySelector('.tags-panel--js');

      if (!panel) {
        return;
      }
      const clockedBody = (isOpenTags = true) => {
        if (isOpenTags) {
          body.classList.add('tags-open');
          return;
        }

        body.classList.remove('tags-open');
      };

      const createMenu = () => {
        const tags = panel.querySelectorAll('.tags-panel__tag');
        if (!tags) {
          return;
        }

        const TAG_LIMIT = 4;
        const TAG_MAX_LIMIT = 6;

        const tagsCount = tags.length;

        if(tagsCount <= TAG_MAX_LIMIT){
          return;
        }

        const fragmentMenu = document.createDocumentFragment();

        const buttonMenu = document.createElement('a');
        buttonMenu.href = "#";
        buttonMenu.textContent = `Показать еще ${tagsCount - TAG_LIMIT}`;
        buttonMenu.classList.add('tags-panel__tag', 'tags-panel__tag-active');
        fragmentMenu.appendChild(buttonMenu);

        const menu = document.createElement('div');
        menu.classList.add('tags-menu');

        const items = document.createElement('div');
        items.classList.add('tags-menu__items');

        tags.forEach((tag, index) => {
          if (index + 1 > TAG_LIMIT) {
            items.appendChild(tag);
          }
        });

        menu.appendChild(items);

        const close = document.createElement('a');
        close.classList.add('btn', 'tags-menu__close');
        close.href = "#";
        close.textContent = 'Закрыть';

        const closeWrapper = document.createElement('div');
        closeWrapper.classList.add('tags-menu__footer');

        closeWrapper.appendChild(close);
        menu.appendChild(closeWrapper);

        fragmentMenu.appendChild(menu);

        const openMenu = (evt) => {
          evt.preventDefault();
          clockedBody();
          menu.classList.add('tags-menu--open');

          close.addEventListener('click', closeMenu);
          window.addEventListener("keydown", closeMenuKeydown);
        };

        const closeMenu = (evt) => {
          evt.preventDefault();
          clockedBody(false);
          menu.classList.remove('tags-menu--open');

          close.removeEventListener('click', closeMenu);
          window.removeEventListener("keydown", closeMenuKeydown);
        };

        const closeMenuKeydown = (evt)=>{
          evt.preventDefault();
          if (evt.keyCode === 27) {
            clockedBody(false);
            menu.classList.remove('tags-menu--open');
          }
          window.removeEventListener("keydown", closeMenuKeydown);
        };

        buttonMenu.addEventListener('click', openMenu);

        return fragmentMenu;
      };

      panel.appendChild(createMenu());

    });
  }
})();