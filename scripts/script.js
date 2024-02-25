const input_field = document.getElementById("input_field");
const Tasks_container = document.getElementById("Tasks_container");

function Add_task() {
    if(input_field.value == ''){
        alert("¡Debe añadir una descripcion de la tarea!"); //validacion del Text Input Field para no crear una tarea vacia, indicandole al usuario por medio de un mensaje tipo ALERT.
    }
    else { //'crea' un elemento de la lista al recuperar la informacion añadida en el text field
        let li = document.createElement("li");
        li.innerHTML = input_field.value;  //indica que se añade dentro del HTML el texto que se rescato del text field
        Tasks_container.appendChild(li);
        let span = document.createElement("span");  //--> lugar donde se encuentra la opcion de eliminar 
        span.innerHTML = "\u00d7"; //--> genera una x cuando se crea la 'tarea' con el fin de que funcione como boton de eliminar
        li.appendChild(span);
    }
    input_field.value = ''; //vacia el text input field despues de haberse añadido una tarea
}

Tasks_container.addEventListener("click",function(e){ //añade evento de 'click' para el list item o span(x)
    if(e.target.tagName === "LI"){   //--> click en elemento de la lista
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){   //--> click en opcion de eliminar elemento de la lista
        e.target.parentElement.remove();
    }

},false);