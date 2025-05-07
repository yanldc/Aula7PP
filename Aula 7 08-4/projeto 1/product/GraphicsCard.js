class GraphicsCard {
    constructor(model, brand) {
      this.model = model;
      this.brand = brand;
    }
  
    specs() {
      throw new Error('Method specs() must be implemented.');
    }
  }
  
  module.exports = GraphicsCard;