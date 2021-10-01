module.exports = (sequelize, Sequelize) => {
    const listItem = sequelize.define("listItem", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INT
        }
    });

    return listItem;
};