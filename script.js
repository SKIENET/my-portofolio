console.log('connected')
const dots = document.querySelectorAll('.theme-dot');
const links = document.querySelector('#theme-style');

let theme = localStorage.getItem('theme')
if (theme === null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('you clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        links.href = 'styles.css'
    } else if (mode == 'blue') {
        links.href = 'blue.css'
    } else if (mode == 'green') {
        links.href = 'green.css'
    } else if (mode = 'purple') {
        links.href = 'purple.css'
    }
}

localStorage.setItem('theme', mode);