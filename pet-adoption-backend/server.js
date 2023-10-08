const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const usersRoutes = require('./routes/users');
const petsRoutes = require('./routes/pets');
const cors = require('cors');


mongoose.connect("mongodb+srv://pngmantis:pngmantis@cluster0.otr3nqw.mongodb.net/petAdoption?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// routes and middleware here
// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', usersRoutes);
app.use('/api', petsRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
