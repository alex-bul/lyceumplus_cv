const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

window.onload = () => {
    let link_contacts = document.getElementById('link_contacts');
    let link_contacts2 = document.getElementById('link_contacts2');
    let link_project = document.getElementById('link_project');

    link_project.onclick = (e) => {
        triggerMenu();
        document.getElementById('projects').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
    }

    link_contacts.onclick = (e) => {
        triggerMenu();
        document.getElementById('contacts').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
    };

    link_contacts2.onclick = (e) => {
        document.getElementById('contacts').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
    };

    window.addEventListener('resize', function(event) {
        triggerMenu(true);
    }, true);
}

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}

const changeMode = () => {
    triggerMenu();
    let button_theme = document.getElementById('theme');
    let body = document.body;
    if(body.classList.contains('dark-theme')){
        button_theme.innerHTML  = 'Тема: <span class="theme-title">светлая</span>';
        body.classList.remove('dark-theme');
    }
    else{
        button_theme.innerHTML  = 'Тема: <span class="theme-title">тёмная</span>';
        body.classList.add('dark-theme');
    }
    
}

const triggerMenu = (only_close = false) => {
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.getElementById('menu');
    // console.log(burgerMenu.computedStyleMap().get('visibility'))
    console.log(burgerMenu.classList)
    if(burgerMenu.computedStyleMap().get('visibility').value === 'visible' && (!only_close || (only_close && burgerMenu.classList.contains('close')))){
        burgerMenu.classList.toggle("close");
        overlay.classList.toggle("overlay");
    }
}


