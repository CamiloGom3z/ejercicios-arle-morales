class Producto {
    constructor(
      codigo,
      descripcion,
      precioCompra,
      precioVenta,
      cantidadBodega,
      cantidadMinimaBodega,
      cantidadMaximaInventario,
      porcentajeDescuento
    ) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinimaBodega = cantidadMinimaBodega;
      this.cantidadMaximaInventario = cantidadMaximaInventario;
      this.porcentajeDescuento = porcentajeDescuento;
    }
  
    solicitarPedido() {
      // Si la cantidad en bodega es menor que la cantidad mínima requerida,
      // se debe solicitar un pedido.
      return this.cantidadBodega < this.cantidadMinimaBodega;
    }
  
    calcularTotalAPagar(cantidad) {
      // Devuelve el total a pagar por una cantidad de unidades de compra.
      return cantidad * this.precioVenta;
    }
  }
  
  class PrendaDeVestir extends Producto {
    constructor(
      codigo,
      descripcion,
      precioCompra,
      precioVenta,
      cantidadBodega,
      cantidadMinimaBodega,
      cantidadMaximaInventario,
      porcentajeDescuento,
      talla,
      permitePlanchado
    ) {
      super(
        codigo,
        descripcion,
        precioCompra,
        precioVenta,
        cantidadBodega,
        cantidadMinimaBodega,
        cantidadMaximaInventario,
        porcentajeDescuento
      );
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  class Calzado extends Producto {
    constructor(
      codigo,
      descripcion,
      precioCompra,
      precioVenta,
      cantidadBodega,
      cantidadMinimaBodega,
      cantidadMaximaInventario,
      porcentajeDescuento,
      talla
    ) {
      super(
        codigo,
        descripcion,
        precioCompra,
        precioVenta,
        cantidadBodega,
        cantidadMinimaBodega,
        cantidadMaximaInventario,
        porcentajeDescuento
      );
      this.talla = talla;
    }
  }
  
  // Función para consultar el número de productos de cada tipo.
  function consultarNumeroProductos(tipo) {
    const input = prompt("Ingrese el número de productos de tipo " + tipo + ": ");
    return parseInt(input);
  }
  
  // Función para crear una estructura de datos para almacenar los productos.
  function crearEstructuraDeDatos(tipo) {
    const estructuraDeDatos = [];
    for (let i = 0; i < consultarNumeroProductos(tipo); i++) {
      const producto = new (tipo === "prendaDeVestir" ? PrendaDeVestir : Calzado)(
        prompt("Ingrese el código del producto: "),
        prompt("Ingrese la descripción del producto: "),
        parseFloat(prompt("Ingrese el precio de compra del producto: ")),
        parseFloat(prompt("Ingrese el precio de venta del producto: ")),
        parseInt(prompt("Ingrese la cantidad en bodega del producto: ")),
        parseInt(prompt("Ingrese la cantidad mínima requerida en bodega del producto: ")),
        parseInt(prompt("Ingrese la cantidad máxima de inventario permitida del producto: ")),
        parseFloat(prompt("Ingrese el porcentaje de descuento del producto: ")),
        prompt("Ingrese la talla del producto: "),
        prompt("Ingrese si el producto permite planchado (verdadero/falso): ") === "verdadero"
      );
      estructuraDeDatos.push(producto);
    }
    return estructuraDeDatos;
  }
  