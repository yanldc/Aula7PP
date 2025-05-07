const GraphicsCard = require('./GraphicsCard');

class RadeonAsus extends GraphicsCard {
  constructor() {
    super('Radeon', 'Asus');
  }

  specs() {
    console.log('Asus Radeon: 8GB GDDR6, 128-bit');
  }
}

module.exports = RadeonAsus;