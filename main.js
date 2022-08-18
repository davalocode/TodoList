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

console.log("Fecha despues de un mes: " + after_1month)


today = yyyy + '-' + mm + '-' + dd;
console.log("Fecha del dia de hoy: " + today);

//Aquí creo y meto las tareas en la pagina y en array_inbox[], array_today[], array_month[]
let contador_tarea = 0;

function crear(nombre, fecha, description) {
    //Crear el contenedor donde va a ir todo
    let main_div = document.createElement("div");

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

    contador_tarea=contador_tarea+1;
}

function new_tarea() {

    array_inbox[contador_tarea] = new tarea(
        document.getElementById("name_tarea").value,
        document.getElementById("date_tarea").value,
        document.getElementById("description_tarea").value
    );

    let nombre_tarea = array_inbox[contador_tarea].nombre;
    let fecha_tarea = array_inbox[contador_tarea].fecha;
    let descripcion_tarea = array_inbox[contador_tarea].description;

    crear(nombre_tarea, fecha_tarea, descripcion_tarea);

}

//Aqui creo y meto los proyectos en la pagina y en el array_projects[]
let contador_proyecto = 0;

function new_project() {

    array_projects[contador_proyecto] = document.getElementById("name_proyecto").value;
    console.log(array_projects[contador_proyecto]);

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

let nuevo_contador=0;
let longitud_inbox;

function delete_content() {
    nuevo_contador=0;
    const list = document.getElementById("container");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  
}

document.getElementById("see_inbox").addEventListener("click", function home() {
    document.getElementById("title").innerHTML="INBOX"
    longitud_inbox=array_inbox.length;
    delete_content();
    while (nuevo_contador<=longitud_inbox) {
    let nombre=array_inbox[nuevo_contador].nombre;
    let fecha=array_inbox[nuevo_contador].fecha;
    let descripcion=array_inbox[nuevo_contador].description;
    crear(nombre, fecha, descripcion);
    nuevo_contador++;
    }
});

document.getElementById("see_today").addEventListener("click", function home() {
    document.getElementById("title").innerHTML="TODAY"
    longitud_inbox=array_inbox.length;
    delete_content();
    while (nuevo_contador<=longitud_inbox) {
    let nombre=array_today[nuevo_contador].nombre;
    let fecha=array_today[nuevo_contador].fecha;
    let descripcion=array_today[nuevo_contador].description;
    crear(nombre, fecha, descripcion);
    nuevo_contador++;
    }
});

document.getElementById("see_month").addEventListener("click", function home() {
    document.getElementById("title").innerHTML="MONTH"
    longitud_inbox=array_inbox.length;
    delete_content();
    while (nuevo_contador<=longitud_inbox) {
    let nombre=array_month[nuevo_contador].nombre;
    let fecha=array_month[nuevo_contador].fecha;
    let descripcion=array_month[nuevo_contador].description;
    crear(nombre, fecha, descripcion);
    nuevo_contador++;
    }
});


