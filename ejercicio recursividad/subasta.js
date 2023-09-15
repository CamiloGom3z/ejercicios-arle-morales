// Estructura de datos para almacenar los productos a subastar.
const productos = [];

// Función para registrar un producto a subastar.
function registrarProducto() {
  const idProducto = prompt("Ingrese el id del producto: ");
  const nombreProducto = prompt("Ingrese el nombre del producto: ");
  const fechaSubasta = prompt("Ingrese la fecha de la subasta: ");
  const precioInicial = parseFloat(prompt("Ingrese el precio inicial de la subasta: "));

  const producto = {
    id: idProducto,
    nombre: nombreProducto,
    fecha: fechaSubasta,
    precioInicial: precioInicial,
    ofertas: [],
  };

  productos.push(producto);
}

// Función para realizar una puja por un producto.
function realizarPuja() {
  const idProducto = prompt("Ingrese el id del producto por el que desea pujar: ");
  const fechaPuja = prompt("Ingrese la fecha de la puja: ");
  const valorOfrecido = parseFloat(prompt("Ingrese el valor ofrecido: "));

  const producto = productos.find((p) => p.id === idProducto);

  // Si el producto existe, agregamos la puja a la lista de ofertas.
  if (producto) {
    producto.ofertas.push({
      fecha: fechaPuja,
      valor: valorOfrecido,
    });
  }
}

// Función para ver la lista de productos registrados.
function verProductos() {
  console.log("Lista de productos registrados:");
  for (const producto of productos) {
    console.log(producto);
  }
}

// Función para ver la lista de ofertas por producto.
function verOfertas() {
  const productosConOfertas = productos.filter((p) => p.ofertas.length > 0);

  console.log("Lista de productos con ofertas:");
  for (const producto of productosConOfertas) {
    console.log(producto);
    for (const oferta of producto.ofertas) {
      console.log("* Fecha: " + oferta.fecha + ", valor: " + oferta.valor);
    }
  }
}

// Función para seleccionar una oferta ganadora.
function seleccionarOfertaGanadora() {
  const productosConOfertas = productos.filter((p) => p.ofertas.length > 0);

  // Si hay productos con ofertas, seleccionamos la oferta con el valor más alto.
  if (productosConOfertas.length > 0) {
    const productoGanador = productosConOfertas[0];
    const ofertaGanadora = productoGanador.ofertas[0];

    console.log("Oferta ganadora:");
    console.log("* Producto: " + productoGanador.nombre + ", valor: " + ofertaGanadora.valor);
  } else {
    console.log("No hay ofertas para ningún producto.");
  }
}

// Menú principal.
function menu() {
  const opciones = ["Registrar producto", "Realizar puja", "Ver productos", "Ver ofertas", "Seleccionar oferta ganadora", "Salir"];

  while (true) {
    console.log("--- Menú principal ---");
    for (let i = 0; i < opciones.length; i++) {
      console.log((i + 1) + ". " + opciones[i]);
    }

    const opcion = parseInt(prompt("Ingrese una opción: "));

    switch (opcion) {
      case 1:
        registrarProducto();
        break;
      case 2:
        realizarPuja();
        break;
      case 3:
        verProductos();
        break;
      case 4:
        verOfertas();
        break;
      case 5:
        seleccionarOfertaGanadora();
        break;
      case 6:
        return;
      default:
        console.log("Opción inválida.");
        break;
    }
  }
}

menu();
