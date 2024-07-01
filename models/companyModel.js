const mongoose = require('mongoose');
const mongooseSequence = require('mongoose-sequence')(mongoose);

const companySchema = new mongoose.Schema({
    companyName: {
        unique: true,
        required: true,
        type: String
    },
    companyAddress: {
        required: false,
        type: String,
    },
    companyContact: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    }],
    companyPhone: {
        required: false,
        type: String
    },
    companyEmail: {
        required: false,
        type: String
    },
    companyWebsite: {
        required: false,
        type: String
    },
    numberOfEmployees: {
        required: false,
        type: Number
    },
    foundedDate: {
        required: false,
        type: Date
    },
    industryType: {
        required: true,
        type: String,
        enum: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Other'],
        default: 'Other'
    }
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
