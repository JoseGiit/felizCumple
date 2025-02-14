document.getElementById("btnSurprise").addEventListener("click", function () {
    // Añadir la clase para el fondo de Tati
    document.body.classList.add("tati-background");

    // Mostrar la imagen tati3 en el centro de la página
    let tati3 = document.getElementById("tati3");
    let tati3Container = document.querySelector(".tati3-container");
    tati3Container.style.display = "block";  // Mostrar la imagen de Tati3

    // Crear lluvia de imágenes
    let cantidad = Math.floor(Math.random() * 50) + 50; // Aumentar cantidad de imágenes, entre 50 y 100
    for (let i = 0; i < cantidad; i++) {
        createImage();
    }

    // Reproducir la canción al hacer clic
    let cancion = document.getElementById("cancion");
    cancion.play();  // Reproduce la canción

    // Verifica si la canción está pausada y comienza en el primer momento
    if (cancion.paused) {
        cancion.play();
    }
    cancion.addEventListener("ended", function () {
        tati3Container.style.display = "none";  // Ocultar el contenedor con las imágenes
        mensaje.style.display = "none";  // Ocultar el mensaje
        document.body.classList.remove("tati-background"); // Eliminar el fondo
    });
});

function createImage() {
    let image = document.createElement("div");
    image.classList.add("tulip");

    let images = [
        "tulipan1.png", "tulipan2.png", "tulipan3.png",
        "tati.png", "tati2.png", "tati3.png"
    ];

    let randomImage = images[Math.floor(Math.random() * images.length)];

    image.style.backgroundImage = `url('${randomImage}')`;
    image.style.left = `${Math.random() * 100}vw`; // Posición aleatoria en el eje X
    image.style.animationDuration = `${Math.random() * 2 + 2}s`; // Menor duración de animación para caer más rápido

    // Tamaño adaptado a móviles y PC
    let size = Math.floor(Math.random() * 50) + 80; // Entre 80px y 130px
    image.style.width = `${size}px`;
    image.style.height = `${size}px`;

    document.querySelector(".tulip-container").appendChild(image);

    // Eliminar la imagen después de que termine la animación
    setTimeout(() => {
        image.remove();
    }, 4000); // Coincidir con el tiempo de la animación
}






