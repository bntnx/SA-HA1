// Función principal para cargar el footer
function cargarFooter() {
    const footerContainer = document.getElementById("footer-container");

    if (footerContainer) {
        // Verifica si la URL contiene '/Pages/' para definir la ruta correcta del componente
        const isPages = window.location.pathname.includes("/Pages/");
        const path = isPages ? "../components/footer.html" : "./components/footer.html";

        fetch(path)
            .then(response => {
                if (!response.ok) throw new Error("Error HTTP: " + response.status);
                return response.text();
            })
            .then(html => {
                // Inserta el HTML en el contenedor
                footerContainer.innerHTML = html;

                // Ejecuta la lógica interna del componente
                actualizarYear();
            })
            .catch(error => console.error("Fallo al cargar footer:", error));
    }
}

// Actualiza el año automáticamente en el span con id "year"
function actualizarYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Inicializa la carga cuando el DOM está listo
document.addEventListener("DOMContentLoaded", cargarFooter);