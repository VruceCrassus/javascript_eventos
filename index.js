precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidadProducto = document.querySelector(".cantidadProducto");
valorTotal = document.querySelector(".valor-total");


    var cantidad = 0;
    var total = 0;
    var suma = document.querySelector('#suma').addEventListener('click', function() {
        cantidad = cantidad+1;
        console.log(cantidad);
        cantidadProducto.innerText = cantidad;
        total =  precio * cantidad;
        valorTotal.innerText = `${total}`;
    })
    var resta = document.querySelector('#resta').addEventListener('click', function() {
         if (cantidad <= 0) 
            { alert ("Cantidad 0, no es posible cantidad inferior a cero")
            return;
         }
            cantidad = cantidad-1;
            console.log(cantidad);
            cantidadProducto.innerText = cantidad 
            total =  precio * cantidad;
            valorTotal.innerText = `${total}`
    })


        