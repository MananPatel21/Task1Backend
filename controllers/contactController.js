const mongoose = require('mongoose');
const Contact = require('../models/contactModel');

const contactController = {
    getContactByCompanyName: async(req, res) => {
        try {
            const { companyName } = req.params;
            const contactData = await Contact.find({ companyName: companyName});
            return res.status(200).json(contactData);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    },

    addContact: async(req, res) => {
        try {
            const contactsData = req.body;
            const contactsToInsert = [];
    
            for (let contactData of contactsData) {
                // Check if contact already exists
                const alreadyExists = await Contact.findOne({ contactName: contactData['Contact Name'] });
                if (alreadyExists) {
                    return res.status(400).json({ error: `Contact '${contactData['Contact Name']}' already exists` });
                }
    
                // Create a new Contact object based on contactData
                const newContact = new Contact({
                    contactName: contactData['Contact Name'],
                    companyName: contactData['Company Name'],
                    contactEmail: contactData['Contact Email'],
                    contactPhone: contactData['Contact Phone'],
                    dateOfBirth: parseDateOfBirth(contactData['Date of Birth']), // Assuming a function to parse date
                    contactType: contactData['Contact Type']
                });
    
                contactsToInsert.push(newContact); // Add the new Contact object to the array
            }
            console.log(contactsToInsert);
            // Insert all new Contact objects into the database
            const insertedContacts = await Contact.insertMany(contactsToInsert);
    
            // Prepare response with contact IDs
            const insertedContactIds = insertedContacts.map(contact => contact._id);
    
            return res.status(200).json({ message: `${insertedContacts.length} contacts added successfully!`, contactIds: insertedContactIds });
        } catch (err) {
            console.error('Error adding contacts:', err);
            return res.status(500).json({ message: err.message });
        }
    }
};

const parseDateOfBirth = (dateString) => {
    const parts = dateString.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    return new Date(year, month - 1, day);
};

module.exports = contactController;
