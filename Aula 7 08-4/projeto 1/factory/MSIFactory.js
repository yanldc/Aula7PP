const GraphicsCardFactory = require('./GraphicsCardFactory');
const GeforceMSI = require('../product/GeforceMSI');
const RadeonMSI = require('../product/RadeonMSI');
const TitanMSI = require('../product/TitanMSI');

class MSIFactory extends GraphicsCardFactory {
  createGeforce() {
    return new GeforceMSI();
  }

  createRadeon() {
    return new RadeonMSI();
  }

  createTitan() {
    return new TitanMSI();
  }
}

module.exports = MSIFactory;