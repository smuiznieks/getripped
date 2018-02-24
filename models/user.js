module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                is: /^[a-z]+$/i
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Associating User with Post
    User.associate = function (models) {
        // When an User is deleted, also delete any associated Posts and Profile
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
        User.hasOne(models.Profile, {
            onDelete: "cascade"
        });
    };

    return User;
};
