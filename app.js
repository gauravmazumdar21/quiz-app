const express = require('express');
const mongoose = require('mongoose');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/quizDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', quizRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
