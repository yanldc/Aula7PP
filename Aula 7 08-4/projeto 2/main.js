const HondaFactory = require('./factory/hondaFactory');
const YamahaFactory = require('./factory/yamahaFactory');

function main() {
  const hondaFactory = new HondaFactory();
  const yamahaFactory = new YamahaFactory();

  console.log('--- Honda Factory ---');
  const honda150 = hondaFactory.criarMoto150();
  const honda250 = hondaFactory.criarMoto250();
  const honda500 = hondaFactory.criarMoto500();

  honda150.especificacoes();
  honda250.especificacoes();
  honda500.especificacoes();

  console.log('\n--- Yamaha Factory ---');
  const yamaha150 = yamahaFactory.criarMoto150();
  const yamaha250 = yamahaFactory.criarMoto250();
  const yamaha500 = yamahaFactory.criarMoto500();

  yamaha150.especificacoes();
  yamaha250.especificacoes();
  yamaha500.especificacoes();
}

main();