enum Segmento {
    Estudiante = "Estudiante",
    Docente = "Docente",
  }
  
  enum Modulo {
    Terminal = "Terminal",
    Oficina = "Oficina",
  }
  
  interface Usuario {
    nombre: string;
    segmento: Segmento;
  }
  
  interface Estadisticas {
    usuariosAtendidos: number;
    atendidosPorDia: Record<string, { [key in Segmento]: number }>;
    transferencias: number;
  }
  
  class Universidad {
    private estadisticas: Estadisticas = {
      usuariosAtendidos: 0,
      atendidosPorDia: {},
      transferencias: 0,
    };
  
    private usuariosEnEspera: Usuario[] = [];
  
    public atenderUsuario(usuario: Usuario, modulo: Modulo): void {
      this.usuariosEnEspera.push(usuario);
  
      
      const usuarioAtendido = this.usuariosEnEspera.shift();
  
      if (usuarioAtendido) {
        this.estadisticas.usuariosAtendidos++;
  
        const fechaActual = new Date().toISOString().split('T')[0];
        if (!this.estadisticas.atendidosPorDia[fechaActual]) {
          this.estadisticas.atendidosPorDia[fechaActual] = {
            [Segmento.Estudiante]: 0,
            [Segmento.Docente]: 0,
          };
        }
        this.estadisticas.atendidosPorDia[fechaActual][usuarioAtendido.segmento]++;
  
        console.log(`Atendiendo a ${usuarioAtendido.nombre} (${usuarioAtendido.segmento}) en ${modulo}`);
  
        
        if (Math.random() < 0.2) {
          this.estadisticas.transferencias++;
          this.atenderUsuario(usuarioAtendido, modulo === Modulo.Terminal ? Modulo.Oficina : Modulo.Terminal);
        }
      }
    }
  
    public obtenerEstadisticas(): Estadisticas {
      return this.estadisticas;
    }
  }
  

  const universidad = new Universidad();
  

  const usuarios: Usuario[] = [
    { nombre: "Juan", segmento: Segmento.Estudiante },
    { nombre: "María", segmento: Segmento.Docente },
    { nombre: "Pedro", segmento: Segmento.Estudiante },
    { nombre: "Ana", segmento: Segmento.Docente },
  ];
  
  
  usuarios.forEach((usuario, index) => {
    const modulo = index % 2 === 0 ? Modulo.Terminal : Modulo.Oficina;
    universidad.atenderUsuario(usuario, modulo);
  });
  
 
  const estadisticas = universidad.obtenerEstadisticas();
  console.log(estadisticas);
  