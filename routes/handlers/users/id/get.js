const { User } = require('../../../../models');

module.exports = async (req, res) => {
    const { userId } = req.params;
    
    const user = await User.findByPk(userId, {
        attributes: { exclude: ["password", "createdAt", "updatedAt"]},
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found!"
        });
    }

    res.json({user});
}