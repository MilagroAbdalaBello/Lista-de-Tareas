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

        button.addEventListener("click", () => {
       const modal = document.getElementById("miModal");
    if (modal) {
        modal.style.display = "block"; // Esto muestra la ventana
    }
});
    } catch (error) {
        console.error("Error al crear el botón:", error);
    }
});


//Funcionamiento del modal

document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM
    const modal = document.getElementById("miModal") as HTMLDivElement;
    const btnCerrar = document.getElementById("botonCerrar") as HTMLSpanElement;
    const btnGuardar = document.getElementById("guardarTarea") as HTMLButtonElement;
    const inputTarea = document.getElementById("inputTarea") as HTMLInputElement;
    const listaTareas = document.getElementById("listaTareas") as HTMLUListElement;

    // 1. Abrir el modal (usa el botón que creaste antes)
    // Suponiendo que tu botón verde tiene el ID 'miBoton'
    const miBotonVerde = document.getElementById("miBoton");
    miBotonVerde?.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // 2. Cerrar el modal al hacer clic en la (X)
    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
        inputTarea.value = ""; // Limpia el texto al cerrar
    });

    // 3. Guardar la tarea y mostrarla en pantalla
    btnGuardar.addEventListener("click", () => {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea !== "") {
        // 1. Crear el contenedor de la tarea (li)
        const nuevaTarea = document.createElement("li");
        nuevaTarea.className = "item-tarea"; // Para darle estilo en CSS

        // 2. Crear el Checkbox (Checkpoint de "ya lo hice")
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            nuevaTarea.classList.toggle("completada");
        });

        // 3. Crear el texto de la tarea (usaremos un span para poder editarlo)
        const spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;
        spanTexto.className = "texto-tarea";

        // 4. Botón Editar
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️";
        btnEditar.className = "btn-accion edit";
        btnEditar.onclick = () => {
            const nuevoTexto = prompt("Edita tu tarea:", spanTexto.textContent || "");
            if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
                spanTexto.textContent = nuevoTexto.trim();
            }
        };

        // 5. Botón Eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑️";
        btnEliminar.className = "btn-accion delete";
        btnEliminar.onclick = () => {
            if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
                nuevaTarea.remove();
            }
        };

        // 6. Unir todo al li y el li a la lista
        nuevaTarea.append(checkbox, spanTexto, btnEditar, btnEliminar);
        listaTareas.appendChild(nuevaTarea);

        // Limpiar y cerrar
        modal.style.display = "none";
        inputTarea.value = "";
    }
});
    });