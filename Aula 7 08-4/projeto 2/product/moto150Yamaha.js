const Moto = require('./moto');

class Moto150Yamaha extends Moto {
  constructor() {
    super('150cc', 'Yamaha');
  }

  especificacoes() {
    console.log('Yamaha 150cc: Motor OHC');
  }
}

module.exports = Moto150Yamaha;