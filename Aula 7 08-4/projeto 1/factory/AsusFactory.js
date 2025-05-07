const GraphicsCardFactory = require('./GraphicsCardFactory');
const GeforceAsus = require('../product/GeforceAsus');
const RadeonAsus = require('../product/RadeonAsus');
const TitanAsus = require('../product/TitanAsus');

class AsusFactory extends GraphicsCardFactory {
  createGeforce() {
    return new GeforceAsus();
  }

  createRadeon() {
    return new RadeonAsus();
  }

  createTitan() {
    return new TitanAsus();
  }
}

module.exports = AsusFactory;