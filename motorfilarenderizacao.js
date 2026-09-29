class ProjetoVideo {
  constructor(titulo, formatoSaida) {
    this.titulo = titulo;
    this.formatoSaida = formatoSaida;
    this.status = "pendente";
  }
}

class ServidorRender {
  constructor() {
    this.fila = [];
  }

  enfileirar(projeto) {
    if (
      projeto.formatoSaida !== ".mp4" &&
      projeto.formatoSaida !== ".mov"
    ) {
      return;
    }

    this.fila.push(projeto);
  }

  processarFila() {
    while (this.fila.length > 0) {
      const projetoAtual = this.fila.shift();

      projetoAtual.status = "Concluído";

      console.log(
        `Projeto "${projetoAtual.titulo}" processado: ${projetoAtual.status}`
      );
    }
  }
}

const servidor = new ServidorRender();

servidor.enfileirar(
  new ProjetoVideo("Intro Animação", ".mp4")
);

servidor.processarFila();