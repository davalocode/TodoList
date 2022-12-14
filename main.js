/*Hacer un constructor del objeto que va a ser una tarea - Hecho*/
/*Meterlo en un array - Hecho*/
/*Imprimirlo en pantalla - Hecho*/
/*Hay diferentes partes como hoy, esta semana, mes, etc. Asi que hay que hacer distintos
arrays por ejemplo: month = [], year = []. Y hacer como en la pagina de la pizzeria y 
eliminar los hijos para imprimir los nuevos arrays*/
/*Hay que usar localStorage para que se almacenen los datos aun despues habiendo cerrado*/
/*Dentro de los proyectos que es un array deben de ponerse tareas que es otro array*/


let array_inbox = [];
let array_today = [];
let array_month = [];
let array_projects = [];

//let array_almacenado = localStorage.setItem("array", JSON.stringify(array_inbox));
//console.log(array_almacenado);




function tarea(nombre, fecha, description) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.description = description;
}

//Obtener fecha del dia de hoy
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();


let new_mm = String(today.getMonth() + 2).padStart(2, '0');
let after_1month = yyyy + '-' + new_mm + '-' + dd


today = yyyy + '-' + mm + '-' + dd;

//Aquí creo y meto las tareas en la pagina y en array_inbox[], array_today[], array_month[]
let contador_tarea = 0;
let id_div = 0;

function crear(nombre, fecha, description) {
    //Crear el contenedor donde va a ir todo
    let main_div = document.createElement("div");
    main_div.id = id_div;
    main_div.className = "div_tarea";

    //Crear el span nombre
    let span_nombre = document.createElement("span");
    span_nombre.innerHTML = nombre;
    main_div.append(span_nombre);

    //Crear el span date
    let span_date = document.createElement("span");
    span_date.innerHTML = fecha;
    main_div.append(span_date);

    //Crear el span description
    let span_description = document.createElement("span");
    span_description.innerHTML = description;
    main_div.append(span_description);

    //Crear boton borrar
    let boton_borrar = document.createElement("button");
    boton_borrar.onclick = function array() {
        const numeros = document.getElementsByClassName("div_tarea");

        for (const numero of numeros) {
            numero.addEventListener("click", function tenerNumero() {
                let x = numero.id;
                console.log(x);
                array_inbox.splice(x, 1);
                array_today.splice(x, 1);
                array_month.splice(x, 1);
            })
        }
    };
    boton_borrar.innerHTML = "Borrar elemento"
    main_div.append(boton_borrar);

    //Meter el div en el contendor principal
    let container = document.getElementById("container");
    container.appendChild(main_div);


    //Si la tarea es de hoy se añade a array_today[]
    if (document.getElementById("date_tarea").value == today) {
        array_today[contador_tarea] = array_inbox[contador_tarea];
    }

    //Si la tarea es de este mes se añade a array_month[]

    let fecha_escogida = document.getElementById("date_tarea").value;

    if (today <= fecha_escogida && fecha_escogida <= after_1month) {
        array_month[contador_tarea] = array_inbox[contador_tarea];
    }

    id_div++;
    contador_tarea = contador_tarea + 1;
}

function new_tarea() {

    //Constructor del objeto
    array_inbox[contador_tarea] = new tarea(
        document.getElementById("name_tarea").value,
        document.getElementById("date_tarea").value,
        document.getElementById("description_tarea").value
    );

    //Declaracion de las variables con los datos del objeto construido
    let nombre_tarea = array_inbox[contador_tarea].nombre;
    let fecha_tarea = array_inbox[contador_tarea].fecha;
    let descripcion_tarea = array_inbox[contador_tarea].description;

    /*
    //Se almacenan los datos de manera local
    localStorage.setItem("nombre_tarea_almacenada", JSON.stringify(nombre_tarea));
    localStorage.setItem("fecha_tarea_almacenada", JSON.stringify(fecha_tarea));
    localStorage.setItem("descripcion_tarea_almacenada", JSON.stringify(descripcion_tarea));

    let nombre_tarea_almacenada = localStorage.getItem("nombre_tarea_almacenada");
    nombre_tarea_almacenada = nombre_tarea_almacenada.substring(1, (nombre_tarea_almacenada.length - 1));

    let fecha_tarea_almacenada = localStorage.getItem("fecha_tarea_almacenada");
    fecha_tarea_almacenada = fecha_tarea_almacenada.substring(1, (fecha_tarea_almacenada.length - 1));

    let descripcion_tarea_almacenada = localStorage.getItem("descripcion_tarea_almacenada");
    descripcion_tarea_almacenada = descripcion_tarea_almacenada.substring(1, (descripcion_tarea_almacenada.length - 1));
    */
    //Se crea el html con la funcion crear

    crear(nombre_tarea, fecha_tarea, descripcion_tarea);


}

//Aqui creo y meto los proyectos en la pagina y en el array_projects[]
let contador_proyecto = 0;

function new_project() {

    array_projects[contador_proyecto] = document.getElementById("name_proyecto").value;

    //Creamos el p que vamos a meter en la pagina
    let main_p = document.createElement("p");

    //Creamos la imagen que va dentro del p
    let img_project = document.createElement("img");
    img_project.src = "/img/list.svg"
    main_p.append(img_project);

    //Creamos el span que va dentro del p
    let span_project = document.createElement("span");
    span_project.innerHTML = array_projects[contador_proyecto];
    main_p.append(span_project);

    //Metemos el main_p al div de la pagina
    let container = document.getElementById("projects-content");
    container.appendChild(main_p);


    contador_proyecto++

}

//FUNCION PARA DEJAR TODO LIMPIO AL CAMBIAR

let nuevo_contador = 0;

function delete_content() {
    nuevo_contador = 0;
    const list = document.getElementById("container");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

}

//MOSTRAR DISTINTOS ARRAYS

let longitud_inbox;
let prueba2;
let prueba3;
let nombre;
let fecha;
let descripcion;

document.getElementById("see_inbox").addEventListener("click", function home() {
    id_div = 0;
    document.getElementById("title").innerHTML = "INBOX"
    longitud_inbox = array_inbox.length;
    delete_content();

        localStorage.setItem("array", JSON.stringify(array_inbox));
        prueba2 = localStorage.getItem("array");
        console.log(prueba2);
        prueba3 = JSON.parse(prueba2);
        console.log(prueba3);
        console.log(prueba3[0].nombre)

    while (nuevo_contador <= longitud_inbox) {
        let nombre = prueba3[nuevo_contador].nombre;
        let fecha = prueba3[nuevo_contador].fecha;
        let descripcion = prueba3[nuevo_contador].description;

        crear(nombre, fecha, descripcion);


        nuevo_contador++;
    }
});


document.getElementById("see_today").addEventListener("click", function home() {
    id_div = 0;
    document.getElementById("title").innerHTML = "TODAY"
    longitud_inbox = array_inbox.length;
    delete_content();
    while (nuevo_contador <= longitud_inbox) {
        let nombre = array_today[nuevo_contador].nombre;
        let fecha = array_today[nuevo_contador].fecha;
        let descripcion = array_today[nuevo_contador].description;
        crear(nombre, fecha, descripcion);
        nuevo_contador++;
    }
});

document.getElementById("see_month").addEventListener("click", function home() {
    id_div = 0;
    document.getElementById("title").innerHTML = "MONTH"
    longitud_inbox = array_inbox.length;
    delete_content();
    while (nuevo_contador <= longitud_inbox) {
        let nombre = array_month[nuevo_contador].nombre;
        let fecha = array_month[nuevo_contador].fecha;
        let descripcion = array_month[nuevo_contador].description;
        crear(nombre, fecha, descripcion);
        nuevo_contador++;
    }
});

//Esconder inbox
let boleano = false;

document.getElementById("hamburger").addEventListener("click", function pop_up() {
    if (boleano == false) {
        document.getElementById("left").style.display = "none";
        boleano = true;
    }
    else {
        document.getElementById("left").style.display = "block";
        boleano = false;
    }

});


