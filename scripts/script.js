if (matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentElement(
        'beforeend',
        '<link rel="stylesheet" href="styles/light.css" onload="document.documentElement.style.display=\'\'">'
    )
}

const body = document.body;
const toggle = document.querySelector(".toggle-input");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = localStorage.getItem("theme");

function setTheme(mode, save = true) {
    if (mode === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        toggle.checked = true;
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        toggle.checked = false;
    }
    if (save) {
        localStorage.setItem("theme", mode);
    }
}

if (!savedTheme) {
    savedTheme = mediaQuery.matches ? "dark" : "light";
}

setTheme(savedTheme, false)

toggle.addEventListener("change", () => {
    setTheme(toggle.checked ? "dark" : "light");
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
        setTheme(event.matches ? "dark" : "light", false);
    }
});