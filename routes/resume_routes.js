const express = require('express');
const path = require('path');

const router = express.Router();
const resumeData = require('../data/resume_data');

router.get('/', (req, res) => {
    res.render('resume', {
        data: resumeData
    });
});

router.get('/download-resume', (req, res) => {
    if (!resumeData.resume_pdf) {
        return res.status(404).send('Resume PDF is not configured yet.');
    }

    const filePath = path.join(__dirname, '..', 'public', 'resume', resumeData.resume_pdf);

    res.download(filePath, resumeData.resume_pdf, (err) => {
        if (err) {
            console.error('PDF download failed:', err);
            res.status(404).send('Resume file is not available. Please try again later.');
        }
    });
});

module.exports = router;
