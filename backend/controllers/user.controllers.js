const User = require("../src/models/User")
const ctrlUser = {};

ctrlUser.getUsers = async (req, res) =>
{
        const Users = await User.find()

        return res.json({Users});
}

module.exports = ctrlUser;