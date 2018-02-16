module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    // Associating Post with User - each post must have a user
    Post.associate = function (models) {
        // A Post can't be created without a User due to the foreign key constraint
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Post;
};
