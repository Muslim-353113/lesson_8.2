const themeButton = document.querySelector("#themeButton");

// Восстанавливаем сохранённую тему
let theme = localStorage.getItem("theme") || "light";
function applyTheme() {
    document.body.classList.toggle("dark", theme === "dark");

    themeButton.textContent =
        theme === "dark"
            ? "Светлая тема"
            : "Тёмная тема";
}

// Применяем тему при открытии страницы
applyTheme();

// Переключаем тему и сохраняем выбор
themeButton.addEventListener("click", function () {
    theme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", theme);

    applyTheme();
});