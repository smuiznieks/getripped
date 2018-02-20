module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        profName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        profPic: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        profLocation: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1]
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
