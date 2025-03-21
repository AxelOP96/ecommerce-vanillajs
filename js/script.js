const d = document;
/**Consignas Principales
Configuración del Proyecto:

Crea la estructura básica de tu proyecto eCommerce, incluyendo archivos HTML, CSS y JS. Organiza tus carpetas de manera lógica.
Integración con API:

Selecciona una API pública (por ejemplo, de productos, como la de OpenCommerce) y realiza una llamada para obtener una lista de productos. Asegúrate de manejar los errores adecuadamente.
Mostrar Productos:

Crea un componente en el HTML que muestre los productos obtenidos de la API en formato de tarjeta, incluyendo imagen, título, precio y una breve descripción.
Carrito de Compras:

Implementa una funcionalidad para añadir productos al carrito. Utiliza un array en JavaScript para almacenar los productos seleccionados.
Visualización del Carrito:

Diseña una página o un modal que muestre el contenido del carrito, incluyendo el nombre del producto, cantidad, precio y un total a pagar.
Eliminar Productos del Carrito:

Agrega la funcionalidad para eliminar productos del carrito y actualiza el total automáticamente.
Formulario de Pago:

Crea un formulario que simule el proceso de pago, solicitando datos como nombre, dirección y número de tarjeta (puedes usar campos de entrada simples).
Persistencia de Datos:

Utiliza localStorage para guardar los productos en el carrito, de manera que permanezcan allí incluso al recargar la página.
Diseño Responsivo:

Asegúrate de que tu sitio sea responsivo y funcione bien en dispositivos móviles. Utiliza CSS flexbox o grid para el diseño.
Validación de Formulario:

Implementa validaciones básicas en el formulario de pago, como comprobar que los campos no estén vacíos y que el formato del correo electrónico sea correcto.
Consignas Opcionales
Búsqueda y Filtrado:

Agrega una barra de búsqueda que permita a los usuarios filtrar productos por nombre o categoría.
Paginación:

Implementa paginación para la lista de productos, mostrando un número limitado por página.
Valoraciones de Productos:

Permite a los usuarios dejar valoraciones o comentarios en los productos, guardándolos en localStorage.
Animaciones y Transiciones:

Agrega animaciones y transiciones CSS para mejorar la experiencia de usuario al añadir o eliminar productos del carrito.
Interfaz de Usuario Mejorada:

Usa una biblioteca de estilos (como Bootstrap) para mejorar el diseño visual del sitio.
Modo Oscuro:

Implementa un botón para alternar entre modo claro y modo oscuro.
Historial de Compras:

Crea una página donde los usuarios puedan ver su historial de compras (simulado, usando localStorage).
Compartir Productos:

Implementa botones para compartir productos en redes sociales.
Notificaciones:

Agrega notificaciones en la interfaz para informar al usuario sobre acciones completadas (como agregar un producto al carrito).
Multilenguaje:

Implementa un sistema básico de traducción que permita cambiar entre varios idiomas.
Estas consignas deberían proporcionarte una base sólida para desarrollar tu proyecto de eCommerce. ¡Buena suerte!



 */
const $products = d.querySelector(".products");

d.addEventListener("DOMContentLoaded", (e)=>{
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => renderProducts(data));

        function renderProducts( products){
            
            products.forEach( pr =>{
                const div = d.createElement("div");
                console.log(pr)
                div.innerHTML += `<h2>${pr.title}</h2><img src="${pr.image}"><h3>${pr.category}</h3><h3>$ ${pr.price}</h3>`
                div.classList.add("cards")
                $products.appendChild(div);
            })
        }
})
