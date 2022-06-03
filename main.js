let ingredientes = ['harina','sal','agua','levadura','salsa','queso','jamón','aceitunas','orégano','palmitos'];
console.log(ingredientes);

function clasificar(array){
    let pares = [];
    let impares = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].length%2 == 0){
            pares.push(array[index])
        }
        else {
            impares.push(array[index])
        }
    }
    console.log(`Los ingredientes pares son: ${pares}.Los ingredientes impares son: ${impares} `)
}

clasificar(ingredientes);