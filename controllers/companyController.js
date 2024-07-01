const mongoose = require('mongoose');
const Company = require('../models/companyModel');
// const Contact = require('../models/contactModel');
const axios = require('axios');
let nextCompanyId = 1;

const companyController = {
    getCompanies: async (req, res) => {
        try {
            const companiesData = await Company.find().populate('companyContact');
            return res.status(200).json(companiesData);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    getCompany: async (req, res) => {
        try {
            const { companyName } = req.params;
            const companyData = await Company.findOne({ companyName: companyName }).populate('companyContact');
            return res.status(200).json(companyData);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    // Adjust the path as per your project structure

    addCompany: async (req, res) => {
        try {
            const companiesData = req.body;
            const companiesToInsert = [];

            for (let companyData of companiesData) {
                const alreadyExists = await Company.findOne({ companyName: companyData.companyName });
                if (alreadyExists) {
                    return res.status(400).json({ error: `Company '${companyData.companyName}' already exists` });
                }

                // Create a new Company object based on companyData
                const newCompany = new Company({
                    companyName: companyData.Company_Name,
                    companyAddress: companyData.Company_Address,
                    companyContact: [], // Assuming you handle company contacts separately
                    companyPhone: companyData.Company_Phone,
                    companyEmail: companyData.Company_Email,
                    companyWebsite: companyData.Company_Website,
                    numberOfEmployees: parseInt(companyData.Employees),
                    foundedDate: companyData.Founded_Date,
                    industryType: companyData.Industry_Type
                    // Do not include companyId here
                });

                companiesToInsert.push(newCompany); // Add the new Company object to the array
            }

            // Insert all new Company objects into the database
            const insertedCompanies = await Company.insertMany(companiesToInsert);

            // Prepare response with company IDs
            const insertedCompanyIds = insertedCompanies.map(company => company._id);

            return res.status(200).json({ message: `${insertedCompanies.length} companies added successfully!`, companyIds: insertedCompanyIds });
        } catch (err) {
            console.error('Error adding companies:', err);
            return res.status(500).json({ message: err.message });
        }
    }


};

module.exports = companyController;