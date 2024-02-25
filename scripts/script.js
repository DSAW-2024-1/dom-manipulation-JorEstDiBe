const input_field = document.getElementById("input_field");
const Tasks_container = document.getElementById("Tasks_container");

function Add_task() {
    if(input_field.value == ''){
        alert("¡Debe añadir una descripcion de la tarea!")
    }
    else { //'crea' un elemento de la lista al recuperar la informacion añadida en el text field
        let li = document.createElement("li");
        li.innerHTML = input_field.value;  //indica que se añade dentro del HTML el texto que se rescato del text field
        Tasks_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //--> genera una x cuando se crea la 'tarea' con el fin de que funcione como boton de eliminar
        li.appendChild(span);
    }
    input_field.value = '';
}

Tasks_container.addEventListener("click",function(e){ //añade evento de 'click' para el li o span(x)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

},false);