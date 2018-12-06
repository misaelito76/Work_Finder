const jobsList = require('../models/jobsList')
const jobsCtrl = {};
jobsCtrl.getJobs = async(req, res) => {
    const jobs = await jobsList.find();

    res.json(jobs)
};

jobsCtrl.postJob = async(req, res) => {
    const job = new jobsList(req.body);

    await job.save();
    res.json({
        'status': 'Job saved'
    });
};
jobsCtrl.getJob = async(req, res) => {

    const job = await jobsList.findBy(req.params.id);
    res.json(job);
};
jobsCtrl.editJob = async(req, res) => {
    const { id } = req.params;
    const job = {
        _id: req.body._id,
        title: req.body.title,
        city: req.body.city,
        salary: req.body.salary,
        companyName: req.body.companyName,
        Type: req.body.Type,
        CreationDate: req.body.CreationDate,
        CompanyDescription: req.body.CompanyDescription,
        RequiredSkills: req.body.RequiredSkills,
        EndingDate: req.body.EndingDate,
        Description: req.body.Description,
    };
    await jobsList.findOneAndUpdate(id, { $set: job }, { new: true });
    res.json({ status: 'Job Updated' });
};

jobsCtrl.deleteJob = async(req, res) => {
    await jobsList.findByIdAndRemove(req.params.id);
    res.json({ status: 'Job removed' });
};
module.exports = jobsCtrl;