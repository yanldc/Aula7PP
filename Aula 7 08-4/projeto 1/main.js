const AsusFactory = require('./factory/AsusFactory');
const MSIFactory = require('./factory/MSIFactory');

function main() {
  const asusFactory = new AsusFactory();
  const msiFactory = new MSIFactory();

  console.log('--- ASUS Factory ---');
  const asusGeforce = asusFactory.createGeforce();
  const asusRadeon = asusFactory.createRadeon();
  const asusTitan = asusFactory.createTitan();

  asusGeforce.specs();
  asusRadeon.specs();
  asusTitan.specs();

  console.log('\n--- MSI Factory ---');
  const msiGeforce = msiFactory.createGeforce();
  const msiRadeon = msiFactory.createRadeon();
  const msiTitan = msiFactory.createTitan();

  msiGeforce.specs();
  msiRadeon.specs();
  msiTitan.specs();
}

main();