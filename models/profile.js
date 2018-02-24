module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        profName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profPic: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profLocation: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    // Associating Post with User - each post must have a user
    Profile.associate = function (models) {
        // A Post can't be created without a User due to the foreign key constraint
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Profile;
};
