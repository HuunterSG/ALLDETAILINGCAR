const   iconoMenu = document.querySelector('.icono-menu'),
        menu = document.querySelector('.cont-menu');

        iconoMenu.addEventListener('click', (e) => {
    
            //alternamos estilo para menu y body
            menu.classList.toggle('active');
            document.body.classList.toggle('opacity');

})