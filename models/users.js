module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define(
      "Users",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        place_rank: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        place_last_visit_date: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        place_fave_item: {
            type: DataTypes.STRING,
            allowNull: false
          },
        comments: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {
        timestamps: false
      }
    );
    return Users;
  };