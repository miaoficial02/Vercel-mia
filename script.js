const toggleBtn = document.getElementById("toggle-theme");

function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
}

toggleBtn.addEventListener("click", () => {
    let current = localStorage.getItem("theme") || "light";
    if (current === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});

// Aplicar tema guardado al cargar
const saved = localStorage.getItem("theme") || "light";
setTheme(saved);
