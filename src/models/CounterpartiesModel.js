const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema } = mongoose;

// Reply Schema


// PDF Schema
const counterpartiesSchema = new Schema(
    {
        name: { type: String, required: true },
        email:{type:String,required:true},

    },
    { timestamps: true }
);

// Export Model
const CounterpartiesModel = mongoose.model('counterparties', counterpartiesSchema);
module.exports = CounterpartiesModel;
