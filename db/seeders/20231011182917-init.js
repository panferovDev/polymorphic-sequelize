/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Fds', [
      { name: 'FD1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'FD2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'FD3', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    await queryInterface.bulkInsert('Rgs', [
      {
        name: 'RG1', fdId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'RG2', fdId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'RG3', fdId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'RG4', fdId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'RG5', fdId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'RG6', fdId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Sts', [
      {
        name: 'ST1', rgId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST2', rgId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST3', rgId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST4', rgId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST5', rgId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST6', rgId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST7', rgId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST8', rgId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST9', rgId: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST10', rgId: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST11', rgId: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ST12', rgId: 6, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('Initiatives', [
      {
        title: 'Ini1', iniToId: 1, type: 'Fd', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini2', iniToId: 1, type: 'Fd', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini3', iniToId: 2, type: 'Fd', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini4', iniToId: 2, type: 'Fd', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini5', iniToId: 3, type: 'Fd', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini6', iniToId: 3, type: 'Fd', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini7', iniToId: 1, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini8', iniToId: 1, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini9', iniToId: 2, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini10', iniToId: 2, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini11', iniToId: 3, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini12', iniToId: 3, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini13', iniToId: 4, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Ini14', iniToId: 4, type: 'Rg', createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
