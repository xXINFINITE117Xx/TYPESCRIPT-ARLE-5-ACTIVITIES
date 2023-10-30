/*7. Crear una clase Película con propiedades como título, duración y director. Crear clase CatalogoPeliculas para
almacenar películas en una lista. Agregar búsqueda por título y filtrado por director. Probar con un catálogo de
películas.*/

class Pelicula {
    titulo: string;
    duracion: number; 
    director: string;
  
    constructor(titulo: string, duracion: number, director: string) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.director = director;
    }
  }
  
  class CatalogoPeliculas {
    peliculas: Pelicula[];
  
    constructor() {
      this.peliculas = [];
    }
  
    agregarPelicula(pelicula: Pelicula) {
      this.peliculas.push(pelicula);
    }
  
    buscarPorTitulo(titulo: string): Pelicula[] {
      return this.peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }
  
    filtrarPorDirector(director: string): Pelicula[] {
      return this.peliculas.filter(pelicula => pelicula.director.toLowerCase() === director.toLowerCase());
    }
  }
  

  const pelicula1 = new Pelicula('Greyhound', 175, 'Tom Han');
  const pelicula2 = new Pelicula('The Last Tiger', 195, 'Dennis Gansel');
  const pelicula3 = new Pelicula('Oppenheimer', 148, 'Christopher Nolan');
  
  const catalogo = new CatalogoPeliculas();
  catalogo.agregarPelicula(pelicula1);
  catalogo.agregarPelicula(pelicula2);
  catalogo.agregarPelicula(pelicula3);
  

  const peliculasPorTitulo = catalogo.buscarPorTitulo('Titanic');
  console.log('Películas por título:');
  peliculasPorTitulo.forEach(pelicula => console.log(`${pelicula.titulo}, Duración: ${pelicula.duracion} minutos, Director: ${pelicula.director}`));
  

  const peliculasPorDirector = catalogo.filtrarPorDirector('Christopher Nolan');
  console.log('\nPelículas por director:');
  peliculasPorDirector.forEach(pelicula => console.log(`${pelicula.titulo}, Duración: ${pelicula.duracion} minutos, Director: ${pelicula.director}`));
  