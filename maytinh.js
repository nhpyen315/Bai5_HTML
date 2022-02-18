const numbers = document.getElementsByClassName('con_so');
let result = document.getElementById('result');

for (let i = 0; i<con_so.length; i++){
    con_so[i].addEventListener('click', function())
}


function tinh() {
     let result1 = result.innerHTML
     let ketqua = eval(result1);
     result.innerHTML = ketqua;
}

function clear(){
        result.html = " "
}

function undo(){
    let result1 = result.innerHTML;
    result.innerHTML = result1.substring(0, result1.length -1);
}
