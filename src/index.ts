/*Crear boton para agregar tarea*/
document.addEventListener("DOMContentLoaded", () => {
    try {
        const button: HTMLButtonElement = document.createElement("button");
        button.textContent = "Haz clic aquí";
        button.id = "miBoton";
        
        // Estilos (puedes mover esto a tu archivo .css después)
        button.style.padding = "10px 20px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";

        // BUSCAR EL DIV Y AGREGAR EL BOTÓN
        const contenedor = document.querySelector(".tarea");
        if (contenedor) {
            contenedor.appendChild(button);
        }

        button.addEventListener("click", (event: MouseEvent) => {
            event.preventDefault();
            alert("¡Botón Presionado!");
        });
    } catch (error) {
        console.error("Error al crear el botón:", error);
    }
});