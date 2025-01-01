const app = require('./app');
const PORT = 3000;
const connectDB = require('./database');

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})