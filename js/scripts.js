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
    event.preventDefault(); 
    event.stopPropagation();

    if (project === 'wild-quest') {
        downloadFile('res/WildQuest.zip', 'WildQuest.zip');
    } else if (project === 'pokemon-game') {
        alert("Descarga disponible próximamente...");
    } else if (project === 'poker-mind') {
        downloadFile('res/PokerMind.zip', 'PokerMind.zip');
    }
}

function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}




