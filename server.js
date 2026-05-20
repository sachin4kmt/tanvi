const express = require('express');
const path = require('path');

const app = express();

const resumeRoutes = require('./routes/resume_routes');

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', resumeRoutes);

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running: http://localhost:${PORT}`);
});