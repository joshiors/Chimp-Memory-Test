fetch('config.txt')
    .then(response => response.text())
    .then(data => {
        iniciar(data);
    });

//arr: number of squares (arr.length) and the numbers that you want in the squares.
//sec: Only for the second mode, sets the time that have to pass until the numbers are hide. (For activating the second mode uncomment the time mode "setTimeout" function).

function iniciar(config){
    //config
    const cant = config.slice(config.indexOf('cantidad:')+10, config.indexOf('cantidad:')+12); //cantidad de números a generar.
    const seg = config.slice(config.indexOf('segundos:')+10, config.indexOf('segundos:')+14); //tiempo de lectura para el modo con tiempo.

    //time mode
    function tiempo(seg){
        setTimeout(function(){
            $('.btn').css('color','#fff');
        }, seg);
    }

    let modo = config.at(config.indexOf('tiempo:')+8);
    modo=="s" && tiempo(seg); //está presentando mucho tiempo generarse, por lo que le quito 1s para tratar de acercarme al valor realmente requerido.

    let arr = [];
    for(let i=1; i<=cant; i++){
        arr.push(i);
    } //un array que tiene los números a generar.
    
    //grid setting
    for(let i=0; i<100; i++){
        $('#plane').append(`<div id="${i}"></div>`)
    } //generamos la cuadrilla o grid sobre la cual desplegar los números.
    for(let i=0; i<arr.length; i++){ //generaremos las casillas de números.
        let act = Math.floor(Math.random()*60); //seleccionamos un número al azar entre 1 y 60, simulando seleccionar al azar una casilla de la cuadrilla.
    
        $(`#${act}`).length===0 ? i-- : $(`#${act}`).append(`<button class="btn">${arr[i]}</button>`); //si el length del elemento selccionado es diferente de 0, le agregaremos un button al div actual, que es el número. Esto quiere decir que, si el length del div seleccinoado al azar es distinto de 0, le agregaremos el número. / si el length del elemento es igual a 0, reduciremos en 1 el valor de la variable iteradora, el cual al final de esta iteración aumentará, por lo que -1+1 será igual al número inicial, de esta manera si no seleccionamos una casilla adecuada, seguimos buscando. / qué significa que el length sea igual a 0, o que el div no tenga elementos? no lo tengo claro.
        $(`#${act}`).removeAttr('id'); //le quitamos el id que le agregamos el número para que no se siga teniendo en cuenta.
    }
    
    //functions
    let arrB = [];
    
    //click function
    $('.btn').click(function(){
        arrB.push(parseFloat($(this).html()));
    
        if(arrB.length>1 && arrB[arrB.length-1]===arrB[arrB.length-2]+1 || arrB[arrB.length-1]===1){
            $(this).remove();
            $('.btn').css('color','#fff');
        } else {
            $('#plane').remove('div');
            $('body').append('<h1>Incorrecto</h1>')
        }
    }); //función que verifica que elegiste el número correcto.
}
