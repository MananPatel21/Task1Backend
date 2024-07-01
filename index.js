const express = require('express');
const fileUpload = require('express-fileupload');
const { PORT, connectDB } = require('./config/database');
const companyRouter = require('./routers/companyRouter');
const contactRouter = require('./routers/contactRouter');
const cors = require('cors');

connectDB();

const app = express();
const bodyParser = require('body-parser')

app.use(cors());
app.set('view engine', 'pug');
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));

// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/company', companyRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
