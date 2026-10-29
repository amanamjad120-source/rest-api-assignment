require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.status(200).json({ message: 'REST API is running', endpoints: ['/api/auth', '/api/categories', '/api/courses'] }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/courses', require('./routes/course.routes'));

app.use((req, res) => res.status(404).json({ message: 'Route not found', path: req.originalUrl }));
app.use(require('./middleware/error.middleware'));

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)))
  .catch(err => { console.error(`Could not start server: ${err.message}`); process.exit(1); });
