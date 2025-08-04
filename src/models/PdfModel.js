const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema } = mongoose;

// Reply Schema


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
    },
    { timestamps: true }
);

// Export Model
const Pdf = mongoose.model('Pdf', pdfSchema);
module.exports = Pdf;
