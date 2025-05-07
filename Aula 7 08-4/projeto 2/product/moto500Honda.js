const Moto = require('./moto');

class Moto500Honda extends Moto {
  constructor() {
    super('500cc', 'Honda');
  }

  especificacoes() {
    console.log('Honda 500cc: Motor bicilíndrico');
  }
}

module.exports = Moto500Honda;