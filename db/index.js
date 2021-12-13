const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost/email-sender');

const emailSchema = new mongoose.Schema({
    date: Date,
    sent_from: String,
    sent_to: Array,
    title: String,
    body: String,
});

const Emails = mongoose.model('Emails', emailSchema);

module.exports = { Emails };
