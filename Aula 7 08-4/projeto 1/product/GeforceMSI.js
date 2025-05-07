const GraphicsCard = require('./GraphicsCard');

class GeforceMSI extends GraphicsCard {
  constructor() {
    super('Geforce', 'MSI');
  }

  specs() {
    console.log('MSI Geforce: 8GB GDDR6, 192-bit');
  }
}

module.exports = GeforceMSI;