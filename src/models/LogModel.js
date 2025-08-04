const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema } = mongoose;

const LogSchema = new Schema(
    {
        createdBy:{type:Schema.Types.ObjectId,ref:'User',required:true},
        workspaceId:{type:Number,default:1},
        contractId:{ type: Schema.Types.ObjectId, ref: 'Pdf', required: true },
        counterpartiesId:{ type: Schema.Types.ObjectId, ref: 'counterparties', required: true },
        organization_entity:{type:String,required:true},
        contract_type:{type:String,required:true}
    },
    { timestamps: true }
);

// Export Model
const LogModel = mongoose.model('logs', LogSchema);
module.exports = LogModel;
