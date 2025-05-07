const GraphicsCard = require('./GraphicsCard');

class TitanAsus extends GraphicsCard {
  constructor() {
    super('Titan', 'Asus');
  }

  specs() {
    console.log('Asus Titan: 24GB GDDR6X, 384-bit');
  }
}

module.exports = TitanAsus;