const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");
const { User } = require("../../../models");

module.exports = async (req, res) => {

    const {body} = req;

    if (!body.email || !body.password) {
        return res.status(400).json({message: "Email and Password Required!"});
    } 

    const user = await User.findOne({
        where: { email: body.email },
      });

    if (!user) {
        return res.status(404).json({message: "User Not Found"});
    }

    const isPasswordCorrect = compareSync(body.password, user.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({message: "Password not match!"});
    }

    const data = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    const token = jwt.sign({data}, "hashing", {
        expiresIn: "60s",
    });

    return res.json(token);
};