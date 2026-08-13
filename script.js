const submenu = document.querySelector(".submenu");
const button = submenu.querySelector("button");

button.addEventListener("click", () => {
    const aberto = submenu.classList.toggle("aberto");

    button.setAttribute("aria-expanded", aberto);
});