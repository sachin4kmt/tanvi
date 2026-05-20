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
    // Path calculation: Yeh seedhe root ke 'public/resume/Tanvi_Resume.pdf' ko target karega
    const filePath = path.join(__dirname, '..', 'public', 'resume', 'Tanvi_Resume.pdf');
    
    res.download(filePath, 'Tanvi_Resume.pdf', (err) => {
        if (err) {
            console.error("PDF download fail ho gayi:", err);
            // Agar file system me file na mile toh server crash hone ke bajay safe text render hoga
            res.status(404).send("Resume file abhi up-to-date nahi hai. Kripya thodi der baad try karein.");
        }
    });
});

module.exports = router;