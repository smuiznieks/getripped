module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1],
                is: /^[a-z]+$/i
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1]
            }
        }
    });

    // Associating User with Post
    User.associate = function (models) {
        User.hasMany(models.Post, {
            // When an User is deleted, also delete any associated Posts
            onDelete: "cascade"
        });
        User.hasOne(models.Profile, {
            onDelete: "cascade"
        });
    };

    return User;
};
