class Moto {
    constructor(modelo, marca) {
      this.modelo = modelo;
      this.marca = marca;
    }
  
    especificacoes() {
      throw new Error('Método especificacoes() deve ser implementado.');
    }
  }
  
  module.exports = Moto;