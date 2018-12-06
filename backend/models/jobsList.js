const mongoose = require('mongoose');
const { Schema } = mongoose;
const JobsSchema = new Schema({

    Title: { type: String, required: true },
    City: { type: String, required: true },
    Salary: { type: String, required: true },
    CompanyName: { type: String, required: true },
    Type: { type: String, required: true },
    CreationDate: { type: Date, required: true },
    CompanyDescription: { type: String, required: true },
    RequiredSkills: { type: String, required: true },
    EndingDate: { type: Date, required: true },
    Description: { type: String, required: true },

});
module.exports = mongoose.model('Jobs', JobsSchema);