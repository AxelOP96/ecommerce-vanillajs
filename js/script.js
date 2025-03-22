const d = document;
/**Consignas Principales

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
const $favourites = new Set();
const $carrito = [];
const $products = d.querySelector(".products");
const $search = d.getElementById("search");
const $sectionFavourites = d.querySelector(".favourites");
const $number = d.getElementById("number");

d.addEventListener("DOMContentLoaded", (e)=>{
    localStorage.getItem("productos")
    if($number.textContent == ""){
        $number.textContent = parseInt(0);
    }
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => renderProducts(data));

        function renderProducts( products){
            products.forEach( pr =>{
                const div = d.createElement("div");
                div.innerHTML += `
                <h2>${pr.title}</h2>
                <img src="${pr.image}">
                <h3>${pr.category}</h3>
                <div id="product-${pr.id}"><h3>$ ${pr.price}</h3><button class="fav">💜</button></div>
                <button class="cart">Agregar al carrito<span id="count"></span></button>`
                div.classList.add("cards")
                $products.appendChild(div);
            })
            const $count = d.querySelector("#count");
            const $favs = d.querySelectorAll(".fav");
            const $carts = d.querySelectorAll(".cart")
            editarEstadoFavs($favs);
            agregadoACarrito($carts)
        }
        
})

d.addEventListener("input", (e)=>{
    if(e.target === $search){
        const $h2 = d.querySelectorAll("h2");
        $h2.forEach( title =>{
            if(!title.textContent.toLowerCase().includes(`${$search.value.toLowerCase()}`)){
                title.parentElement.classList.add("none");
            }else{
                title.parentElement.classList.remove("none");
            }
        })
    }
})

function editarEstadoFavs(favs){
    d.addEventListener("click", (e)=>{
        
        favs.forEach((fav) =>{
            if(e.target === fav){
                const productId = Number(fav.parentElement.getAttribute("id").substring(8));   
                if (!$favourites.has(productId)) {
                    $favourites.add(productId);
                        
                    fetch('https://fakestoreapi.com/products')
                        .then(response => response.json())
                        .then(data => renderFavs(data, [...$favourites]));
                }  
            } 
        })
        //Establecemos que va a renderizar con el click, pero despues con el domcontentloaded deberia traer los ya guardados con localstorage
        //favourites seria todos los datos, deberia compararlos con los id de $favourites
        //console.log($favourites[0].substring(8))
        function renderFavs(data, favourites){
            const $fragment = d.createDocumentFragment();
            data.forEach( (el, index)=>{
                const div = d.createElement("div");
                
                if(favourites.includes(el.id)){
                    div.innerHTML += `
                    <h2>${el.title}</h2>
                    <img src="${el.image}">
                    <h3>${el.category}</h3>
                    <div id="product-${el.id}"><h3>$ ${el.price}</h3><button class="fav">💜</button></div>
                    <button class="cart">Agregar al carrito<span id="count"></span></button>`
                    div.classList.add(`cards`,`${index}`);
                    $fragment.appendChild(div);
                }
                
            })
            const $favcards = d.querySelectorAll(".favourites .cards");
            //console.log($favcards)
            eliminarCardsRepetidas($favcards)
            $sectionFavourites.appendChild($fragment);
            
        }
    }) 
}
function agregadoACarrito(btnCarritos){
    d.addEventListener("click", (e)=>{
        btnCarritos.forEach( (btnCart) =>{
            if(e.target === btnCart) $number.textContent = parseInt($number.textContent)+1;
        })
        
    })
    localStorage.setItem("productos",$number.textContent)
}
/* function eliminarCardsRepetidas($favcards){
    let indices = [];
    
    $favcards.forEach( (card, index)=>{
        for(let i=0;i<$favcards.length;i++){
            if(card.classList.contains(`${i+1}`)){
                indices.push(i+1);
            }
        }
        console.log(card)
        //tomar el indice y si se repite dos veces o mas borrar
        let contador =0;
        
    })
} */
    function eliminarCardsRepetidas($favcards) {
        const counts = {};
        $favcards.forEach(card => {
            const className = Array.from(card.classList).find(cls => !isNaN(cls)); 
            if (className) {
                counts[className] = (counts[className] || 0) + 1;
            }
        });
    
        $favcards.forEach(card => {
            const className = Array.from(card.classList).find(cls => !isNaN(cls));
            if (className && counts[className] > 1) {
                card.classList.add('none') ;
            }
        });
    }
    