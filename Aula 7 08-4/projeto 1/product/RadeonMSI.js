const GraphicsCard = require('./GraphicsCard');

class RadeonMSI extends GraphicsCard {
  constructor() {
    super('Radeon', 'MSI');
  }

  specs() {
    console.log('MSI Radeon: 16GB GDDR6, 256-bit');
  }
}

module.exports = RadeonMSI;