"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Comments", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.UUID,
         },
         post: {
            type: Sequelize.UUID,
            references: {
               model: {
                  tableName: "posts",
               },
               key: "id",
            },
            allowNull: false,
         },
         content: {
            type: Sequelize.TEXT,
         },
         date: {
            type: Sequelize.DATE,
         },
         author: {
            type: Sequelize.UUID,
            references: {
               model: {
                  tableName: "users",
               },
               key: "id",
            },
            allowNull: false,
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
      await queryInterface.dropTable("Comments");
   },
};
