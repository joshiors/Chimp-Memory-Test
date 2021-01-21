$(function(){

    //definition: there are x number of squares in a plane. Each square contains a number, and each square is part of a scale that starts from 0 and goes upwards depending of the number of squares indicated. The squares are posicionate randomly on the screen.
    //the thing: the test consists in clicking in ascendent order the squares, but, when you click a square, the rest of them will hide their value, so, you have to memorize ubication of each number. This is one mode of the test. The other is that, the squares are display, x seconds passes, and all the squeares values are hide, absolutely of if you click or not, unlike the other mode.

    //preliminaries
    let arr = [1,2,3,4,5,6], sec = 2000;
    //arr: number of squares (arr.length) and the numbers that you want in the squares.
    //sec: Only for the second mode, sets the time that have to pass until the numbers are hide. (For activating the second mode uncomment the time mode "setTimeout" function).

    for(let i=0; i<60; i++){
        $('#plane').append(`<div id="${i}"></div>`)
    }

    for(let i=0; i<arr.length; i++){
        let act = Math.floor(Math.random()*60);

        $(`#${act}`).length===0 ? i-- : $(`#${act}`).append(`<button class="btn">${arr[i]}</button>`);
        $(`#${act}`).removeAttr('id');
    }

    //functions
    let arrB = [];

    //click mode
    $('.btn').click(function(){
        arrB.push(parseFloat($(this).html()));

        if(arrB.length>1 && arrB[arrB.length-1]===arrB[arrB.length-2]+1 || arrB[arrB.length-1]===1){
            $(this).remove();
            $('.btn').css('color','#fff');
        } else {
            $('#plane').remove('div');
            $('body').append('<h1>Incorrecto</h1>')
        }
    });

    // //time mode
    // setTimeout(function(){
    //     $('.btn').css('color','#fff');
    // }, sec);

});