document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("navbar-container");
    if (navContainer) {
        // Detectar si estamos en carpeta Pages
        const isPages = window.location.pathname.includes("/Pages/");
        const path = isPages ? "../components/navbar.html" : "./components/navbar.html";

        fetch(path)
            .then(r => r.ok ? r.text() : Promise.reject(r.status))
            .then(html => {
                navContainer.innerHTML = html;

                const toggle = document.getElementById("nav-toggle");
                const nav = document.getElementById("main-nav");
                
                if (toggle && nav) {
                    toggle.addEventListener("click", () => {
                        // Cambiamos el atributo ARIA
                        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
                        toggle.setAttribute("aria-expanded", !isExpanded);
                        
                        // ¡IMPORTANTE! Usamos 'is-open' que es la clase que tiene styles.css
                        nav.classList.toggle("is-open"); 
                    });
                }

                // Corregir enlaces (ruta relativa)
                if (isPages) {
                    const links = navContainer.querySelectorAll("a");
                    links.forEach(link => {
                        const href = link.getAttribute("href");
                        if (href && href.startsWith("#")) {
                            link.setAttribute("href", "../index.html" + href);
                        } else if (href && !href.startsWith("http") && !href.startsWith("../")) {
                             link.setAttribute("href", "../" + href);
                        }
                    });
                }
            })
            .catch(e => console.error("Error navbar:", e));
    }
});