"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Users", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.UUID,
         },
         role: {
            type: Sequelize.UUID,
            references: {
               model: {
                  tableName: "roles",
               },
               key: "id",
            },
            allowNull: false,
         },
         firstName: {
            type: Sequelize.STRING,
         },
         lastName: {
            type: Sequelize.STRING,
         },
         email: {
            type: Sequelize.STRING,
         },
         username: {
            type: Sequelize.STRING,
         },
         github: {
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Users");
   },
};
