const {User} = require('../../../models');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    // Required Name, Email, Password

    const {body} = req;

    // Validation
    if (!body.name && !body.email && !body.password) {
        return res.status(400).json({message: "Form is Empty!"});
    }else if (!body.name) {
        return res.status(400).json({message: "Name is required!"});
    }else if (!body.email) {
        return res.status(400).json({message: "Email is required!"});
    }else if (!body.password) {
        return res.status(400).json({message: "Password is required!"});
    }

    // Verification Email
    const isEmailUsed = await User.findOne({where: 
        {email: body.email},
    });

    if (isEmailUsed) {
        return res.status(400).json({message: "Email already taken!"});
    }

    const password = bcrypt.hashSync(body.password, 10);

    const user = await User.create({
        name: body.name,
        email: body.email,
        password
    });
    
    return res.json(user);
};