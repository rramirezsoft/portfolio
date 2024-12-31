let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("cpp");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("nodejs");
        habilidades[4].classList.add("mongodb");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("project");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Función para cambiar entre temas
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

function handleDownload(event, project) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    event.stopPropagation(); // Detener la propagación del evento de clic

    if (project === 'wild-quest') {
        // Descargar el archivo WildQuest.zip
        const link = document.createElement('a');
        link.href = 'res/WildQuest.zip';
        link.download = 'WildQuest.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if (project === 'pokemon-game') {
        // Mostrar alerta para el proyecto Pokémon Game
        alert("Descarga disponible próximamente...");
    } else if (project == 'poker-mind'){
        // Redirigimos al enlace para ejecutar el notebook de Anáisis de datos
        window.open('https://mybinder.org/v2/gh/rramirezsoft/poker-mind/master?filepath=data_analysis.ipynb')
    }
}



