const main = document.getElementById("main");
const verCarrito = document.getElementById("verCarrito");
const carritoF = document.getElementById ("carritoF");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src= "${product.img}">
        <h2>${product.nombre} </h3>
        <p>${product.precio} $ </p> 
        `;

    main.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";

    content.append(comprar);
    

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
    });
});
verCarrito.addEventListener("click", () =>{

    const headerCar = document.createElement ("div");
    headerCar.className = "headerCar"
    headerCar.innerHTML = `
        <h1> Carrito <h1>
        `;
    carritoF.append(headerCar)
    
    const carritoButton = document.createElement("h1")
    carritoButton.innerText = "Productos";

    headerCar.append (carritoButton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "card";
        carritoContent.innerHTML= `
            <img src="${product.img}">
            <h3> ${product.nombre}</h3>
            <p>${product.precio} $ </p>
        `;    
        carritoF.append(carritoContent);
    })
  
    const total = carrito.reduce((a,el) => a + el.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.innerHTML = `Total a pagar: ${total} $`;
    carritoF.append(totalCompra);
})