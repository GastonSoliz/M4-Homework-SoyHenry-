const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Character", {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      len: [1, 5],
      isNotEqualTo(value) {
        if (value.toUpperCase() === "HENRY") {
          throw Error("Invalid");
        }
      },
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notIn: [["Henry", "SoyHenry", "Soy Henry"]] },
    },
    age: { type: DataTypes.INTEGER },
    race: {
      type: DataTypes.ENUM(
        "Human",
        "Elf",
        "Machine",
        "Demon",
        "Animal",
        "Other"
      ),
      defaultValue: "Other",
    },
    hp: { type: DataTypes.FLOAT, allowNull: false },
    mana: { type: DataTypes.FLOAT, allowNull: false },
    createdAt: false,
    updatedAt: false,
  });
};
