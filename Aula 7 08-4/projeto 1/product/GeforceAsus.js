const GraphicsCard = require('./GraphicsCard');

class GeforceAsus extends GraphicsCard {
  constructor() {
    super('Geforce', 'Asus');
  }

  specs() {
    console.log('Asus Geforce: 8GB GDDR6, 256-bit');
  }
}

module.exports = GeforceAsus;