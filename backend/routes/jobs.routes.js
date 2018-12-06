const express = require('express');
const router = express.Router();
const jobsCtrl = require('../controllers/jobs.controller.js');
router.get('/', jobsCtrl.getJobs);
router.post('/', jobsCtrl.postJob);
router.get('/:id', jobsCtrl.getJob);
router.put('/:id', jobsCtrl.editJob);
router.delete('/:id', jobsCtrl.deleteJob);
module.exports = router;