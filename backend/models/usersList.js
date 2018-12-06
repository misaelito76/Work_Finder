const mongoose = require('mongoose');
const { Schema } = mongoose;
const UsersSchema = new Schema({

    UserName: { type: String, required: false },
    Password: { type: String, required: false },
    FullName: { type: String, required: false },
    Email: { type: String, required: false },
    MainSkills: { type: String, required: false },
    Education: { type: String, required: false },
    WorkExperience: { type: String, required: false },
});
module.exports = mongoose.model('users', UsersSchema);