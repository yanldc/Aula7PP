const GraphicsCard = require('./GraphicsCard');

class TitanMSI extends GraphicsCard {
  constructor() {
    super('Titan', 'MSI');
  }

  specs() {
    console.log('MSI Titan: 24GB GDDR6X, 384-bit');
  }
}

module.exports = TitanMSI;