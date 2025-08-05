const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema } = mongoose;

const logSchema = new Schema({
    message: { type: String, required: true },
    createdBy: { type: String},
    createdAt: { type: Date, default: Date.now }
});



// PDF Schema
const pdfSchema = new Schema(
    {
        title: { type: String, required: true },
        url: { type: String, required: true },
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        counterparty_name: [{ type: Schema.Types.ObjectId, ref: 'Counterparty' }],
        contract_type: { type: String,required:true },
        organization_entity:{type:String,required:true},
        extractionId: { type: Schema.Types.ObjectId, ref: 'PdfExtraction' },
        metaDataId: { type: Schema.Types.ObjectId, ref: 'MetaData' },
        status:{
            type: String,
            enum: ['Draft','Redlining','Signing','Executed','On Hold','Voided'],  
            required: true
        },
        logs:[logSchema],
        counterparty_signature:[{ type: Schema.Types.ObjectId, ref: 'Counterparty' }],
    },
    { timestamps: true }
);

// Export Model
const Pdf = mongoose.model('Pdf', pdfSchema);
module.exports = Pdf;
