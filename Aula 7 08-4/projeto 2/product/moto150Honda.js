const Moto = require('./moto');

class Moto150Honda extends Moto {
  constructor() {
    super('150cc', 'Honda');
  }

  especificacoes() {
    console.log('Honda 150cc: Motor OHC, 5 marchas');
  }
}

module.exports = Moto150Honda;