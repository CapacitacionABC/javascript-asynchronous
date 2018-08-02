// Promises

const aplicarDescuento = new Promise(function(resolve, reject) {
    const descuento = true;

    if (descuento) {
        resolve('Desacuento aplicado')
    } else {
        reject('Desacuento no aplicado')
    }
});

aplicarDescuento.then(function(mensaje) {
    console.log(mensaje)
}).catch(function(error) {
    console.log(error);
});