const { User } = require('../../../../models');

module.exports = async (req, res) => {
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({message: "User Not Found!"});
    }

    await user.destroy();

    return res.json({
        message: "User Deleted!"
    });
}