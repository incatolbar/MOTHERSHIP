//Para el boton de zoom, ponerle clase enlarge a lo que se agrandaria. En proceso.

const zoomIcon = document.getElementById("zoom");
const elementsToEnlarge = document.querySelectorAll(".enlarge");

zoomIcon.addEventListener("click", function() {
    elementsToEnlarge.forEach(function(element) {
        element.style.fontSize = "4em"; 
    });
});