const Moto = require('./moto');

class Moto250Honda extends Moto {
  constructor() {
    super('250cc', 'Honda');
  }

  especificacoes() {
    console.log('Honda 250cc: Motor DOHC, 6 marchas');
  }
}

module.exports = Moto250Honda;