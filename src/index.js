/*Crear boton para agregar tarea*/
document.addEventListener("DOMContentLoaded", function () {
    try {
        var button = document.createElement("button");
        button.textContent = "Haz clic aquí";
        button.id = "miBoton";
        // Estilos (puedes mover esto a tu archivo .css después)
        button.style.padding = "10px 20px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";
        // BUSCAR EL DIV Y AGREGAR EL BOTÓN
        var contenedor = document.querySelector(".tarea");
        if (contenedor) {
            contenedor.appendChild(button);
        }
        button.addEventListener("click", function () {
            var modal = document.getElementById("miModal");
            if (modal) {
                modal.style.display = "block"; // Esto muestra la ventana
            }
        });
    }
    catch (error) {
        console.error("Error al crear el botón:", error);
    }
});
//Funcionamiento del modal
document.addEventListener("DOMContentLoaded", function () {
    // Referencias a los elementos del DOM
    var modal = document.getElementById("miModal");
    var btnCerrar = document.getElementById("botonCerrar");
    var btnGuardar = document.getElementById("guardarTarea");
    var inputTarea = document.getElementById("inputTarea");
    var listaTareas = document.getElementById("listaTareas");
    // 1. Abrir el modal (usa el botón que creaste antes)
    // Suponiendo que tu botón verde tiene el ID 'miBoton'
    var miBotonVerde = document.getElementById("miBoton");
    miBotonVerde === null || miBotonVerde === void 0 ? void 0 : miBotonVerde.addEventListener("click", function () {
        modal.style.display = "block";
    });
    // 2. Cerrar el modal al hacer clic en la (X)
    btnCerrar.addEventListener("click", function () {
        modal.style.display = "none";
        inputTarea.value = ""; // Limpia el texto al cerrar
    });
    // 3. Guardar la tarea y mostrarla en pantalla
    btnGuardar.addEventListener("click", function () {
        var textoTarea = inputTarea.value.trim();
        if (textoTarea !== "") {
            // 1. Crear el contenedor de la tarea (li)
            var nuevaTarea_1 = document.createElement("li");
            nuevaTarea_1.className = "item-tarea"; // Para darle estilo en CSS
            // 2. Crear el Checkbox (Checkpoint de "ya lo hice")
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function () {
                nuevaTarea_1.classList.toggle("completada");
            });
            // 3. Crear el texto de la tarea (usaremos un span para poder editarlo)
            var spanTexto_1 = document.createElement("span");
            spanTexto_1.textContent = textoTarea;
            spanTexto_1.className = "texto-tarea";
            // 4. Botón Editar
            var btnEditar = document.createElement("button");
            btnEditar.textContent = "✏️";
            btnEditar.className = "btn-accion edit";
            btnEditar.onclick = function () {
                var nuevoTexto = prompt("Edita tu tarea:", spanTexto_1.textContent || "");
                if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
                    spanTexto_1.textContent = nuevoTexto.trim();
                }
            };
            // 5. Botón Eliminar
            var btnEliminar = document.createElement("button");
            btnEliminar.textContent = "🗑️";
            btnEliminar.className = "btn-accion delete";
            btnEliminar.onclick = function () {
                if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
                    nuevaTarea_1.remove();
                }
            };
            // 6. Unir todo al li y el li a la lista
            nuevaTarea_1.append(checkbox, spanTexto_1, btnEditar, btnEliminar);
            listaTareas.appendChild(nuevaTarea_1);
            // Limpiar y cerrar
            modal.style.display = "none";
            inputTarea.value = "";
        }
    });
});
