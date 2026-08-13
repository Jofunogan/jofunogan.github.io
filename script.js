const submenu = document.querySelector(".submenu");
const button = submenu.querySelector("button");

let temporizador;

function abrirSubmenu() {
    clearTimeout(temporizador);

    submenu.classList.add("aberto");
    button.setAttribute("aria-expanded", "true");
}

function fecharSubmenu() {
    submenu.classList.remove("aberto");
    button.setAttribute("aria-expanded", "false");
}

button.addEventListener("click", () => {
    const aberto = submenu.classList.contains("aberto");

    if (aberto) {
        fecharSubmenu();
    } else {
        abrirSubmenu();
    }
});

submenu.addEventListener("mouseenter", () => {
    abrirSubmenu();
});

submenu.addEventListener("mouseleave", () => {
    temporizador = setTimeout(() => {
        fecharSubmenu();
    }, 300);
});