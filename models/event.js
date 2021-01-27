const mongoose = require('mongoose');

//1. create schema
//2. create and export model
// RHS Schema fearure provided by mongooese ==> mongoose.Schema
// LHS : Schema is constructor funtion which used to generate schema objects
// here , mongoose schema feature is pointing to constructor Schema
// schema is kinde of plan 
const Schema = mongoose.Schema;

//new object and no float in java script for price
const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

// creating and exporting Model , Model which uses the Schema that we have created 
module.exports = mongoose.model('Event',eventSchema);



