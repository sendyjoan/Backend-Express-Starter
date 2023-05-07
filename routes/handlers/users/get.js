const { User } = require('../../../models');

module.exports = async (req, res) => {
    const users = await User.findAll({
        attributes: { exclude: ["password", "createdAt", "updatedAt"]},
    });

    return res.json(users);
};