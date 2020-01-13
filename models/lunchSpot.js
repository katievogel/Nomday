module.exports = function(sequelize, DataTypes) {
    var LunchSpot = sequelize.define(
      "LunchSpot",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        place_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        place_website: {
          type: DataTypes.STRING,
          allowNull: true
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
        }
      },
      {
        timestamps: false
      }
    );
    return LunchSpot;
  };