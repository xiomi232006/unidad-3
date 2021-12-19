//Mini Proyecto
// iniciamos nuestro arreglo con nombres de marcas de vehículos
const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];
//A traves de un for recorremos todos los elementos del arreglo y los mostramos en el html por medio de imagenes
let text = "";
for (let i = 0; i < cars.length; i++) {
    text += '<img src="assets/img/' + cars[i] + '.png" width="100"></img>';
}
// ocupamos innerHTML para mostrar el arreglo
document.getElementById("demo").innerHTML = text;

// Al hacer click en Shift eliminamos el primer elemento
let b3 = document.getElementById("btn_push"); // Encuentra el elemento "btn_push" en el sitio
b3.onclick = funcionPush; // Agrega función onclick al elemento

function funcionPush(e) {
    cars.push("lexus");
    text = "";
    for (let i = 0; i < cars.length; i++) {
        text += '<img src="assets/img/' + cars[i] + '.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML = text;
}

// Al hacer click en Shift eliminamos el primer elemento
let b4 = document.getElementById("btn_pop"); // Encuentra el elemento "btn_pop" en el sitio
b4.onclick = funcionPop; // Agrega función onclick al elemento

function funcionPop(e) {
    if (cars.length > 0) {
        cars.pop();
        text = "";
        for (let i = 0; i < cars.length; i++) {
            text += '<img src="assets/img/' + cars[i] + '.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML = text;
    } else {
        alert("No puede seguir eliminando valores, ya que el arreglo esta vacío.");
    }

}
// Al hacer click en Shift eliminamos el primer elemento
let b1 = document.getElementById("btn_shift"); // Encuentra el elemento "btn_shift" en el sitio
b1.onclick = funcionShift; // Agrega función onclick al elemento

function funcionShift(e) {
    if (cars.length > 0) {
        cars.shift();
        text = "";
        for (let i = 0; i < cars.length; i++) {
            text += '<img src="assets/img/' + cars[i] + '.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML = text;
    } else {
        alert("No puede seguir eliminando valores, ya que el arreglo esta vacío.");
    }

}

// Al hacer click en Shift eliminamos el primer elemento
let b2 = document.getElementById("btn_unshift"); // Encuentra el elemento "btn_unshift" en el sitio
b2.onclick = funcionUnshift; // Agrega función onclick al elemento

function funcionUnshift(e) {
    cars.unshift("ferrari");
    text = "";
    for (let i = 0; i < cars.length; i++) {
        text += '<img src="assets/img/' + cars[i] + '.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML = text;
}

// Al hacer click en Slice crearemos un nuevo arreglo temporal indicando el begin y el end
let b5 = document.getElementById("btn_slice"); // Encuentra el elemento "btn_slice" en el sitio


b5.onclick = funcionSlice; // Agrega función onclick al elemento
function funcionSlice(e) {

    begin = document.getElementById("begin").value;
    end = document.getElementById("end").value;
    if (bigin = ! "" && end != "") {

        console.log(begin);
        console.log(end);
        new_array = cars.slice(bigin, end);
        text = "";
        for (let i = 0; i < new_array.length; i++) {
            text += '<img src="assets/img/' + new_array[i] + '.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML = text;
    } else {
        alert("Debe ingresar un valor en los campos begin y end");
    }

}