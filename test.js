const {
  Initiative, Fd, St, Rg,
} = require('./db/models');

async function test() {
  // find all initiatives polymorphic

  const allInitiative = await Fd.findAll({
    where: {
      id: 2,
    },
    include: Initiative,
  });

  console.log(JSON.stringify(allInitiative, null, 2));
}

test();
