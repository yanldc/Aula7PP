const MotoFactory = require('./motoFactory');
const Moto150Honda = require('../product/moto150Honda');
const Moto250Honda = require('../product/moto250Honda');
const Moto500Honda = require('../product/moto500Honda');

class HondaFactory extends MotoFactory {
  criarMoto150() {
    return new Moto150Honda();
  }

  criarMoto250() {
    return new Moto250Honda();
  }

  criarMoto500() {
    return new Moto500Honda();
  }
}

module.exports = HondaFactory;