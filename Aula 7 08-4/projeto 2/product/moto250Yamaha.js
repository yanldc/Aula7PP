const Moto = require('./moto');

class Moto250Yamaha extends Moto {
  constructor() {
    super('250cc', 'Yamaha');
  }

  especificacoes() {
    console.log('Yamaha 250cc: Motor DOHC');
  }
}

module.exports = Moto250Yamaha;