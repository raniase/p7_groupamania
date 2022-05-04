"use strict";

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

    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          id: 1,
          userId: 4,
          imageUrl: "http://localhost:3000/images/userimg_John1649862423201.jpg",
          title:
            "John",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 3,
          imageUrl: "http://localhost:3000/images/userimg_finetude.jpg",
          title: "Fin études",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          userId: 2,
          imageUrl: "http://localhost:3000/images/userimg_1649862342881.jpg",
          title:
            "C'est l'heure de l'apéro",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
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
