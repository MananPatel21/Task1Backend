const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactName: {
        required: true,
        type: String
    },
    companyName: {
        required: true,
        type: String
    },
    contactEmail: {
        required: true,
        type: String
    },
    contactPhone: {
        required: false,
        type: String
    },
    dateOfBirth: {
        required: false,
        type: Date
    },
    contactType: {
        required: true,
        type: String,
        enum: ['Primary', 'Secondary', 'Other']
    }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;