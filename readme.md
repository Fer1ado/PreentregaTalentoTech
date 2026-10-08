# Cliente de Fake Store API

Aplicación de línea de comandos hecha con Node.js para consultar y modificar productos de [Fake Store API](https://fakestoreapi.com).

## Requisitos

- Node.js 18 o posterior, que incluye `fetch`.
- Conexión a Internet para realizar las solicitudes a la API.

No se necesitan dependencias adicionales. Para iniciar la aplicación se usa el script `start` definido en `package.json`.

## Uso

Los comandos tienen este formato:

```text
npm start -- <MÉTODO> <recurso>[/<id>] [datos del producto]
```

El método puede ser `GET`, `POST` o `DELETE`. El recurso usado en los ejemplos es `products`.

### Consultar todos los productos

```powershell
npm start -- GET products
```

### Consultar un producto por ID

```powershell
npm start -- GET products/1
```

### Crear un producto

Los datos se indican en este orden: producto, precio, descripción, imagen y categoría. Los tres primeros son obligatorios para pasar la validación de la aplicación; imagen y categoría son opcionales.

```powershell
npm start -- POST products "Classic T-Shirt" 19.99 "Cotton T-Shirt" "https://example.com/shirt.jpg" "Clothing"
```

La aplicación envía una solicitud `POST` con los datos recibidos como JSON.

### Eliminar un producto

```powershell
npm start -- DELETE products/1
```

## Qué hace la aplicación

- Interpreta los argumentos de la terminal para obtener el método, el recurso, el ID y los datos.
- Envía solicitudes HTTP a `https://fakestoreapi.com`.
- Muestra en la terminal los parámetros de la solicitud y la respuesta de la API.
- Usa colores ANSI para distinguir algunos mensajes de estado.

