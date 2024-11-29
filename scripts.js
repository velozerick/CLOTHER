let carrito = [];

// Mostrar carrito
document.getElementById("carrito-btn").addEventListener("click", () => {
    document.getElementById("carrito-modal").style.display = "block";
    actualizarCarrito();
});

// Cerrar carrito
document.getElementById("cerrar-carrito").addEventListener("click", () => {
    document.getElementById("carrito-modal").style.display = "none";
});

// Mostrar formulario de pago
document.getElementById("pagar-btn").addEventListener("click", () => {
    document.getElementById("carrito-modal").style.display = "none";
    document.getElementById("pago-modal").style.display = "block";
});

// Cerrar formulario de pago
document.getElementById("cerrar-pago").addEventListener("click", () => {
    document.getElementById("pago-modal").style.display = "none";
});

// Agregar productos al carrito
document.querySelectorAll(".agregar-carrito").forEach((boton) => {
    boton.addEventListener("click", () => {
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
        carrito.push({ nombre, precio });
        alert(`${nombre} añadido al carrito`);
        actualizarCarrito(); // Actualizar el carrito al añadir un producto
    });
});

// Actualizar carrito
function actualizarCarrito() {
    const lista = document.getElementById("carrito-lista");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar
    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio.toFixed(2)}
            <button class="btn-borrar" data-index="${index}">❌</button>
        `;
        lista.appendChild(li);
        total += producto.precio;
    });

    document.getElementById("total").textContent = `Total: $${total.toFixed(2)} MXN`;

    // Añadir evento para eliminar producto
    document.querySelectorAll(".btn-borrar").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            carrito.splice(index, 1); // Eliminar producto del carrito
            actualizarCarrito(); // Volver a actualizar la vista del carrito
        });
    });
}

// Confirmar pago
document.getElementById("formulario-pago").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Pago realizado con éxito! Gracias por tu compra.");
    carrito = []; // Vaciar el carrito después del pago
    document.getElementById("pago-modal").style.display = "none";
    actualizarCarrito(); // Actualizar el carrito para mostrarlo vacío
});

carrito.push({
    nombre: "Blusa Formal",
    precio: 499,
    talla: "M"
});
