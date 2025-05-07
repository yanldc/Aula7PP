class GraphicsCardFactory {
    createGeforce() {
      throw new Error('Method createGeforce() must be implemented.');
    }
  
    createRadeon() {
      throw new Error('Method createRadeon() must be implemented.');
    }
  
    createTitan() { // Novo
      throw new Error('Method createTitan() must be implemented.');
    }
  }
  
  module.exports = GraphicsCardFactory;