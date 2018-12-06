const users = require('../models/usersList')
const usersCtrl = {};
usersCtrl.getUsers = async(req, res) => {
    const allUsers = await users.find();
    res.json(allUsers)
};

usersCtrl.postUser = async(req, res) => {
    const user = new users(req.body);
    await user.save();
    res.json({
        'status': 'User saved'
    });
};
usersCtrl.getUser = async(req, res) => {

    const user = await users.findById(req.params.id);
    res.json(user);
};
usersCtrl.editUser = async(req, res) => {
    console.log('edit user');
    const { id } = req.params;
    const user = {

        MainSkills: req.body.MainSkills,
        Education: req.body.Education,
        WorkExperience: req.body.WorkExperience
    };
    console.log(id);
    console.log(user);
    await users.findOneAndUpdate({ _id: id }, { $set: user }, { new: true });
    res.json({ status: 'user Updated' });
};

usersCtrl.deleteUser = async(req, res) => {
    await users.findByIdAndRemove(req.params.id);
    res.json({ status: 'user removed' });
};
module.exports = usersCtrl;