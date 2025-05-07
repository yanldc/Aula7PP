const Moto = require('./moto');

class Moto500Yamaha extends Moto {
  constructor() {
    super('500cc', 'Yamaha');
  }

  especificacoes() {
    console.log('Yamaha 500cc: Motor bicilíndrico');
  }
}

module.exports = Moto500Yamaha;