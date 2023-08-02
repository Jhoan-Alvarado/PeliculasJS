
const movies = [
    { image:"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810", description: "Coco es una película de animación por ordenador producida por Pixar Animation Studios y distribuida por Walt Disney Studios Motion Pictures." ,title: "Coco", category: "suspenso", trailer: "https://www.youtube.com/embed/awzWdtCezDo" , type : "peliculas"},
    { image:"https://flxt.tmsimg.com/assets/p10569669_p_v10_aa.jpg" , description: "es una película mexicana-estadounidense de comedia romántica y de aventuras en 3D, inspirada en la celebración del Día de Muertos" ,title: "El libro de la vida", category: "romántica, aventuras, comedia", trailer: "https://www.youtube.com/embed/JvIvF8ST8CY" },
    { image:"https://m.media-amazon.com/images/M/MV5BYzM0YjcwM2QtN2FmMC00YjU2LWI3YzctNDZhOTJiN2VhYjQxXkEyXkFqcGdeQXVyMTU0NjA4Njk3._V1_.jpg" , description: "Dos soldados de élite deben escoltar a civiles a través de un infierno de tiroteos y explosiones ." ,title: "Project X-Traction" ,category: "Juego de guerra", trailer: "https://www.youtube.com/embed/SS4xaLNVqfc", type : "peliculas" },
    { image:"https://m.media-amazon.com/images/M/MV5BNGMzYWZlYmYtNTcyMC00ZGVjLThjN2ItMjY4MjkwN2NlMjYwXkEyXkFqcGdeQXVyOTU0NjY1MDM@._V1_FMjpg_UX1000_.jpg" , description: "Cole se enamora perdidamente de la enigmática Sadie, pero descubre que es una agente secreta. Antes de que puedan decidir una segunda cita, Cole y Sadie se ven arrastrados a una aventura internacional para salvar el mundo." ,title: "Ghosted" ,category: "Aventura", trailer: "https://www.youtube.com/embed/IAdCsNtEuBU" , type : "peliculas"},
    { image:"https://es.web.img3.acsta.net/pictures/22/06/16/12/54/0504030.jpg" , description: "El Gato con Botas descubre que, debido a su pasión por la aventura, ha gastado ya 8 de sus 9 vidas. Por tanto, emprende un peligroso viaje en busca del legendario Último Deseo para solicitar que le restauren las vidas que ya perdió." ,title: "Gato con botas: el último deseo" ,category: "Aventura", trailer: "https://www.youtube.com/embed/QaiUm8jNiCk" , type : "peliculas"},
    { image:"https://cdn.colombia.com/cine/2023/3/65-al-borde-de-la-extincion-41836.jpg" , description: "Tras sufrir un accidente y caer a un planeta desconocido, los supervivientes de la nave descubren que han llegado a la Tierra, pero hace 65 millones de años. Ahora, deben cruzar un territorio inhóspito, poblado de bestias prehistóricas, para salir." ,title: "Al borde de la extinción" ,category: "Aventura", trailer: "https://www.youtube.com/embed/6NFAIZW9Rc4", type : "peliculas" },
    { image:"https://pics.filmaffinity.com/After_Amor_infinito-532172428-large.jpg" , description: "Una pareja debe decidir si continuar con su relación, apasionada pero tóxica, o hacer cambios dramáticos en sus vidas." ,title: "After. Amor Infinito" ,category: "Romantica", trailer: "https://www.youtube.com/embed/bVjSl_AGSPQ" , type : "peliculas"},
    { image:"https://es.web.img3.acsta.net/pictures/18/04/26/18/51/1160967.jpg" , description: "Ronit, una fotógrafa, regresa a Londres con motivo de la muerte de su padre, un rabino. Al volver se reencuentra con una amiga por la que siente atracción, pero el lesbianismo no está bien visto en la comunidad ortodoxa judía a la que pertenecen." ,title: "Desobediencia" ,category: "Romantica", trailer: "https://www.youtube.com/embed/dEkPnie5hSI", type : "peliculas" },
    { image:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2021/3/w1280/41qVwAz4ZCc8g7YQETQih8fpB8q.jpg" , description: "Looks That Kill es una película estadounidense escrita y dirigida por Kellen Moore. La película está protagonizada por Brandon Flynn, Julia Goldani Telles y Ki Hong Lee. La película fue lanzada digitalmente el 19 de junio de 2020." ,title: "Miradas Que Matan" ,category: "Comedia", trailer: "https://www.youtube.com/embed/AfEtdcXYtec" , type : "peliculas"},
    { image:"https://4.bp.blogspot.com/-L509skKIs4I/T3vGescMjyI/AAAAAAAABlg/UgQxZPLx2d4/s1600/MMposterSNOW.jpg" , description: "Una princesa es salvada de la muerte por un grupo de ladrones diminutos y espera poder recuperar su reino en contra de una reina malvada." ,title: "Espejito espejito" ,category: "Comedia", trailer: "https://www.youtube.com/embed/PCDOJgTSwDk" , type : "peliculas"},
    { image:"https://es.web.img3.acsta.net/pictures/16/10/18/16/59/275907.jpg" , description: "l gobierno contrata a la prestigiosa lingüista Louise Banks para que se comunique con unos alienígenas que han llegado a la Tierra. Conforme ella aprende su idioma, va experimentando regresiones muy intensas que desvelan la verdadera misión que les ha llevado hasta nuestro planeta." ,title: "La Llegada" ,category: "Ciencia Ficcion", trailer: "https://www.youtube.com/embed/uWs5lsWXLbo" , type : "peliculas"},
    { image:"https://exorcine.files.wordpress.com/2018/06/zona-mortal-1.jpg" , description: "Tras despertarse después de un accidente automovilístico y sin acordarse de quién es, un hombre se dirige a la ciudad en busca de ayuda." ,title: "Zona Mortal" ,category: "Ciencia Ficcion", trailer: "https://www.youtube.com/embed/i4cKR1ToJ-U" , type : "peliculas"},
    { image:"https://pics.filmaffinity.com/2067-585488368-large.jpg" , description: "El cambio climático ha provocado la necesidad de emplear oxígeno artificial para poder respirar. Con su mujer enferma y pocas esperanzas de sobrevivir, Ethan se ve obligado a viajar al futuro para salvar a los humanos." ,title: "2067" ,category: "Ciencia Ficcion", trailer: "https://www.youtube.com/embed/Uet1cmWe6Zo", type : "peliculas" },
    { image:"https://static.cinepolis.com/resources/mx/movies/posters/414x603/39734-458924-20221002090557.jpg" , description: "Una joven monja se encuentra en una batalla por el alma de una niña que está poseída por el mismo demonio que atormentó a su propia madre años antes." ,title: "La Luz Del Diablo" ,category: "Terror", trailer: "https://www.youtube.com/embed/spTOqMl1Fmo" }, 
    { image:"https://cdn.colombia.com/cine/2022/9/sonrie-41404.jpg" , description: "Tras presencia el dramático incidente sufrido por un paciente, la Dra. Cotter empieza a experimentar hechos aterradores sin explicación aparente. A medida que el horror se adueña de su vida, comprende que la respuesta está en su propio pasado." ,title: "Sonríe" ,category: "Terror", trailer: "https://www.youtube.com/embed/a-JrjnT_678" , type : "peliculas"}

,
    { image:"https://imagenes.elpais.com/resizer/eg22vdl35UK0otvYfZykQgzOKYE=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WMOY5X6NIBHHFBMX7XLE6UW63A.png" , description: "Mark Grayson, de 17 años, es como cualquier otro chico de su edad, excepto que su padre es el superhéroe más poderoso del planeta, Omni-Man. Mark descubre que el legado de su padre puede no ser tan heroico como parece." ,title: "Invencible" ,category: "Animacion", trailer: "https://www.youtube.com/embed/ROCIksHW2oc" , type : "series"},
    { image:"https://es.web.img2.acsta.net/pictures/14/02/28/13/16/398172.jpg" , description: "Phineas y Ferb dos hermanastros que quieren disfrutar de las vacaciones de verano haciendo cosas creativas cada día." ,title: "Phineas Y Ferb" ,category: "Animacion", trailer: "https://www.youtube.com/embed/S0ciFJ5ZDcE" , type : "series"},
    { image:"https://es.web.img2.acsta.net/pictures/19/01/03/09/01/2915581.jpg" , description: "Otis siempre tiene una respuesta respecto al sexo. Otis se une a su amiga Maeve para abrir una clínica de terapia sexual en la escuela." ,title: "Sex Education" ,category: "Humor", trailer: "https://www.youtube.com/embed/IGqEi5FjpCI" , type : "series"},
    { image:"https://images.justwatch.com/poster/301127359/s332/temporada-9" , description: "Paco se enloquece con las jovencitas, y Fran tiene debilidad por las cuarentonas." ,title: "40 Y 20" ,category: "Humor", trailer: "https://www.youtube.com/embed/0hQpIpREHI0", type : "series" },
    { image:"https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg" , description: "Un grupo de niños en la década de 1980 se enfrenta a misterios sobrenaturales cuando un niño desaparece en su pequeño pueblo. A medida que buscan respuestas, descubren un extraño mundo lleno de fuerzas oscuras y peligrosas." ,title: "Stranger Things" ,category: "Ciencia ficción, Drama, Misterio, Terror", trailer: "https://www.youtube.com/embed/Wre1F5YyIlA", type : "series" },
    { image:"https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" , description: "Basada en las novelas Canción de hielo y fuego de George R.R. Martin, la serie sigue la lucha por el poder entre varias familias nobles mientras intentan reclamar el Trono de Hierro y gobernar los Siete Reinos de Westeros." ,title: "Game of Thrones" ,category: " Drama, Fantasía, Aventura", trailer: "https://www.youtube.com/embed/rlR4PJn8b8I" , type : "series"},
    { image:"https://m.media-amazon.com/images/M/MV5BZTEyNjBjYmYtYWYxYi00MmQyLThlYmItY2I4NzM1Mjg1MWYxXkEyXkFqcGdeQXVyMTU3ODI3MTk2._V1_.jpg" , description: "Esta serie cuenta la historia de la vida de la Reina Isabel II desde su ascenso al trono a una edad temprana. Explora los desafíos personales y políticos que enfrenta mientras lidera la monarquía británica a través de décadas de cambios significativos." ,title: "The Crown" ,category: "Drama, Historia", trailer: "https://www.youtube.com/embed/JWtnJjn6ng0" , type : "series"},
    { image:"https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg" , description: "Una antología de historias independientes que exploran la oscura y distópica relación entre la humanidad y la tecnología. Cada episodio presenta una realidad diferente, pero siempre con temas provocadores y una visión inquietante del futuro." ,title: "Black Mirror" ,category: "Ciencia ficción, Drama, Suspenso", trailer: "https://www.youtube.com/embed/C3Hg8qgU4ss", type : "series" },
    { image:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/07/poster-friends.jpg?tf=1200x" , description: "Esta icónica serie sigue las vidas y relaciones de seis amigos que viven en Nueva York. A través de sus altibajos, comparten risas, amor y momentos inolvidables mientras enfrentan los desafíos de la vida adulta." ,title: "Friends" ,category: " Comedia, Romance", trailer: "https://www.youtube.com/embed/MfvvhM6IJS0" , type : "series"},
    { image:"https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg" , description: "Esta versión contemporánea del famoso detective Sherlock Holmes y su compañero, el Dr. John Watson, los lleva a resolver complejos crímenes en el Londres moderno mientras demuestran su brillantez y habilidades deductivas." ,title: "Sherlock" ,category: "Drama, Misterio, Crimen", trailer: "https://www.youtube.com/embed/g9C3bCoiR7U" , type : "series"},
    { image:"https://primusgaming-frontend.s3.amazonaws.com/media/img/banner-top-interna-cat-rs.jpg" , description: "Ambientada en el universo de Star Wars, la serie sigue las aventuras de un solitario cazarrecompensas mandaloriano en los confines de la galaxia, lejos de la autoridad de la Nueva República." ,title: "The Mandalorian" ,category: "Ciencia ficción, Aventura, Fantasía", trailer: "https://www.youtube.com/embed/aOC8E8z_ifw" , type : "series"},
    { image:"https://sm.ign.com/t/ign_latam/gallery/t/the-witche/the-witcher-season-3-first-look-images_qmt8.600.jpg" , description: "Basada en la serie de libros de Andrzej Sapkowski, sigue al cazador de monstruos Geralt de Rivia mientras navega por un mundo peligroso lleno de criaturas mágicas y conflictos políticos." ,title: "The Witcher" ,category: "Drama, Fantasía, Acción", trailer: "https://www.youtube.com/embed/cSqi-8kAMmM" , type : "series"},
    { image:"https://i0.wp.com/thsindex.org/wp-content/uploads/2023/04/Money-Heist-was-first-released-on-Antena-3-in-Spain-in-2017-Netflix.jpg?fit=1920%2C2560&ssl=1" , description: "Un grupo de ladrones con nombres en clave se une para realizar el mayor atraco de la historia en la Fábrica Nacional de Moneda y Timbre de España, mientras se enfrentan a situaciones tensas y emotivas." ,title: "Money Heist" ,category: "Acción, Crimen, Drama", trailer: "https://www.youtube.com/embed/To_kVMMu-Ls" , type : "series"},
    { image:"https://es.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg" , description: "Esta serie se desarrolla en una oficina de ventas de papel en Scranton, Pensilvania. A través de un formato de falso documental, seguimos la vida cotidiana de los empleados excéntricos mientras lidian con situaciones absurdas y cómicas en su entorno laboral." ,title: "The Office" ,category: "Comedia, Mockumentary", trailer: "https://www.youtube.com/embed/6EfzpP2II6M" , type : "series"},
   
];

// const moviesContainer = document.getElementById("movies-container");
// const detailsContainer = document.getElementById("details-container");
// const searchInput = document.getElementById("search");

// // Función para mostrar las películas y series en la página
// function displayMovies(filteredMovies) {
//   moviesContainer.innerHTML = "";
//   filteredMovies.forEach(movie => {
//     const movieCard = document.createElement("div");
//     movieCard.className = "movie-card";
//     movieCard.innerHTML = `
//     <h3 style="font-size: 24px; color: white; text-align: center; text-transform: uppercase; letter-spacing: 2px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);">${movie.title}</h3>
//       <img src="${movie.image}" alt="${movie.title}" class="movie-image" style="max-width: 300px; border-radius: 8px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);">
//       <p>Categoría: ${movie.category}</p>
      
// <button style="background-color: red; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 8px; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);" class="ver-mas-btn " data-trailer="${movie.trailer}" data-image="${movie.image}" data-title="${movie.title}" data-description="${movie.description}">Ver más</button>    `;
//     moviesContainer.appendChild(movieCard);
//   });
// }

// // Función para mostrar los detalles de la película seleccionada
// // Función para mostrar los detalles de la película seleccionada
// function showMovieDetails(trailerURL, imageURL) {
//   // Obtener los parámetros de la URL
//   const params = new URLSearchParams(window.location.search);
//   const title = decodeURIComponent(params.get("title"));
//   const description = decodeURIComponent(params.get("description"));

//   detailsContainer.innerHTML = `
//     <img src="${imageURL}" alt="Portada de la película" class="movie-image">
//     <h2>Detalles de la película</h2>
//     <h3>${title}</h3>
//     <p>${description}</p>
//     <p>Trailer:${trailer}</p>
//     <iframe width="360" height="315" src="${trailerURL}" frameborder="0" allowfullscreen></iframe>
//   `;
// }


// // Función para filtrar las películas por título o categoría
// function filterMovies(searchTerm) {
//   const filteredMovies = movies.filter(movie => {
//     return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//            movie.category.toLowerCase().includes(searchTerm.toLowerCase());
//   });
//   displayMovies(filteredMovies);
// }

// // Mostrar todas las películas al cargar la página
// displayMovies(movies);

// // Manejar la búsqueda en tiempo real
// searchInput.addEventListener("input", () => {
//   const searchTerm = searchInput.value;
//   filterMovies(searchTerm);
// });

// // Agregar evento para mostrar los detalles de la película al hacer clic en "Ver más"
// moviesContainer.addEventListener("click", (event) => {
//   const target = event.target;
//   if (target.classList.contains("ver-mas-btn")) {
//     const trailerURL = target.getAttribute("data-trailer");
//     const imageURL = target.getAttribute("data-image");
//     const title = target.getAttribute("data-title");
//     const description = target.getAttribute("data-description");

//     // Redirigir a la página de detalles de la película con parámetros en la URL
//     window.location.href = `movie_detail.html?trailer=${encodeURIComponent(trailerURL)}&image=${encodeURIComponent(imageURL)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
//   }
// });




const moviesContainer = document.getElementById("movies-container");
const detailsContainer = document.getElementById("details-container");
const searchInput = document.getElementById("search");
const seriesContainer = document.getElementById("series-container")

// Función para mostrar las películas y series en la página
function displayMovies(filteredMovies) {
  moviesContainer.innerHTML = "";
  seriesContainer.innerHTML = "";
  filteredMovies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
    <h3>${movie.title}</h3>
      <img src="${movie.image}" alt="${movie.title}" class="movie-image">
      <p>Categoría: ${movie.category}</p>
      <button  style="background-color: red; color: #fff; font-size: 16px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); transition: background-color 0.3s;" class="ver-mas-btn" data-trailer="${movie.trailer}" data-image="${movie.image}" data-title="${movie.title}" data-description="${movie.description}">Ver más</button>
    `;
     if (movie.type === "peliculas") {
       moviesContainer.appendChild(movieCard)
      
     } else if (movie.type === "series") {
       seriesContainer.appendChild(movieCard);
     }

     moviesContainer.appendChild(movieCard);
   });
}

// Función para filtrar las películas y series por tipo (peliculas o series)
function filterMovies(type) {
  const filteredMovies = movies.filter(movie => movie.type === type);
  displayMovies(filteredMovies); 
}


// Función para mostrar los detalles de la película seleccionada
// Función para mostrar los detalles de la película seleccionada
// function showMovieDetails(trailerURL, imageURL, title, description) {
//   // Obtener los parámetros de la URL
//   const params = new URLSearchParams(window.location.search);
//   const title = decodeURIComponent(params.get("title"));
//   const description = decodeURIComponent(params.get("description"));

//   detailsContainer.innerHTML = `
//     <img src="${imageURL}" alt="Portada de la película" class="movie-image">
//     <h2>Detalles de la película</h2>
//     <h3>${title}</h3>
//     <p>${description}</p>
//     <p>Trailer:${trailer}</p>
//     <iframe width="360" height="315" src="${trailerURL}" frameborder="0" allowfullscreen></iframe>
//   `;
// }
// Función para mostrar los detalles de la película seleccionada
function showMovieDetails(trailerURL, imageURL, title, description) {
  const movieImage = document.getElementById("movie-image");
  movieImage.src = imageURL;

  const movieTitle = document.getElementById("movie-title");
  movieTitle.textContent = title;

  const movieDescription = document.getElementById("movie-description");
  movieDescription.textContent = description;

  const trailerContainer = document.getElementById("trailer-container");
  trailerContainer.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <p>Trailer:</p>
    <iframe width="560" height="315" src="${trailerURL}" frameborder="0" allowfullscreen></iframe>
  `;
}


//Función para filtrar las películas por título o categoría
function filterMoviesByTerm(searchTerm, type) {
  const filteredMovies = movies.filter(movie => {
    return (movie.type === type) &&
           (movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.category.toLowerCase().includes(searchTerm.toLowerCase()));
  });
  displayMovies(filteredMovies); 
}

// Mostrar todas las películas al cargar la página
function showAllMovies(){
displayMovies(movies);
}
showAllMovies()

// Manejar la búsqueda en tiempo real
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  filteredMovies(searchTerm, "peliculas");
  filteredMovies(searchTerm, "series");
});

// Agregar evento para mostrar los detalles de la película al hacer clic en "Ver más"
moviesContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("ver-mas-btn")) {
    const trailerURL = target.getAttribute("data-trailer");
    const imageURL = target.getAttribute("data-image");
    const title = target.getAttribute("data-title");
    const description = target.getAttribute("data-description");

    // Redirigir a la página de detalles de la película con parámetros en la URL
    window.location.href = `movie_detail.html?trailer=${encodeURIComponent(trailerURL)}&image=${encodeURIComponent(imageURL)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
  }
});