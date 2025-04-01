# Carrito de Compras en JavaScript

Este es un proyecto simple de un carrito de compras implementado con JavaScript. Permite agregar productos al carrito, eliminar productos, ver un historial de compras, y tiene funcionalidades de búsqueda y favoritos. El carrito se mantiene persistente utilizando `localStorage` para que los productos permanezcan disponibles incluso después de recargar la página.

## Características

### Funcionalidades Principales:
1. **Carrito de Compras**: 
   - Permite agregar productos al carrito.
   - Utiliza un array en JavaScript para almacenar los productos seleccionados.
   
2. **Visualización del Carrito**: 
   - Muestra el nombre del producto, cantidad, precio y total a pagar.

3. **Eliminar Productos del Carrito**: 
   - Permite eliminar productos del carrito y actualiza el total automáticamente.

4. **Formulario de Pago**: 
   - Simula el proceso de pago solicitando información como nombre, dirección y número de tarjeta.

5. **Persistencia de Datos**:
   - Usa `localStorage` para guardar los productos en el carrito, asegurando que los productos permanezcan en el carrito incluso al recargar la página.

6. **Diseño Responsivo**:
   - El sitio es responsivo y se adapta bien a dispositivos móviles, utilizando Flexbox o Grid en CSS.

7. **Búsqueda y Filtrado**:
   - Permite buscar y filtrar productos por nombre.

8. **Favoritos**:
   - Los productos pueden ser marcados como favoritos, y la lista de favoritos se guarda en `localStorage`.

### Funcionalidades Opcionales:
- **Paginación de Productos**: Limita la cantidad de productos mostrados por página.
- **Valoraciones de Productos**: Permite dejar valoraciones de productos (simulada usando `localStorage`).
- **Modo Oscuro**: Implementa un botón para alternar entre modo claro y modo oscuro.
- **Notificaciones**: Muestra notificaciones de acciones completadas (por ejemplo, agregar un producto al carrito).
- **Interfaz Mejorada**: Uso de bibliotecas de estilos como Bootstrap para mejorar la apariencia visual.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/carrito-de-compras.git
  ```
2. Navega al directorio del proyecto:

cd carrito-de-compras
Uso
Agregar productos al carrito: Haz clic en el botón "Agregar al carrito" debajo de cada producto para agregarlo a tu carrito.

Ver el carrito: Haz clic en el icono de carrito para visualizar los productos añadidos.

Marcar como favorito: Haz clic en el corazón 💜 al lado de un producto para agregarlo a tus favoritos.

Búsqueda de productos: Usa la barra de búsqueda para filtrar productos por nombre.

Formulario de pago: Simula un proceso de pago al completar el formulario con tu información.

Alternar entre favoritos y productos: Usa los botones de navegación para ver los productos en el carrito o los productos favoritos.

Estructura del Proyecto
/carrito-de-compras
├── index.html          # Archivo principal HTML
├── script.js           # Código JavaScript que maneja la lógica de la app
├── style.css           # Estilos CSS para la interfaz

Notas Adicionales
El proyecto usa la API pública FakeStoreAPI para obtener productos de ejemplo. Cada producto contiene un título, imagen, categoría y precio.

Los productos en el carrito se guardan en localStorage, por lo que si recargas la página, los productos se mantienen allí.
