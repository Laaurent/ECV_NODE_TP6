"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         User.belongsTo(models.Role);
         User.hasMany(models.Comment, {
            foreignKey: "author",
         });
         User.hasMany(models.Post{
            foreignKey: "author",
         });
      }
   }
   User.init(
      {
         role: DataTypes.UUID,
         firstName: DataTypes.STRING,
         lastName: DataTypes.STRING,
         email: DataTypes.STRING,
         username: DataTypes.STRING,
         github: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "User",
      }
   );
   return User;
};
