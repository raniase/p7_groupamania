"use strict";
const bcrypt = require("bcrypt");

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
    const fakePassHash = bcrypt.hashSync("DemoAdmin1", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          email: "John.doe@somemail.com",
          isAdmin: 0,
          password: fakePassHash,
          firstname: "John",
          lastname: "Doe",
          username: "JohnDoe",
          bio: "Some bio of John Doe, Some bio Some bioSome bioSome bio",
          imageUrl: "http://localhost:3000/images/test_img.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          email: "fou@somemail.com",
          isAdmin: 0,
          password: fakePassHash,
          firstname: "fou",
          lastname: "bar",
          username: "Fou Bar",
          bio: "Born in 1993.....",
          imageUrl: "http://localhost:3000/images/test_img.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
