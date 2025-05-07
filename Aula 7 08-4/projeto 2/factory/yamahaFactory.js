const MotoFactory = require('./motoFactory');
const Moto150Yamaha = require('../product/moto150Yamaha');
const Moto250Yamaha = require('../product/moto250Yamaha');
const Moto500Yamaha = require('../product/moto500Yamaha');

class YamahaFactory extends MotoFactory {
  criarMoto150() {
    return new Moto150Yamaha();
  }

  criarMoto250() {
    return new Moto250Yamaha();
  }

  criarMoto500() {
    return new Moto500Yamaha();
  }
}

module.exports = YamahaFactory;