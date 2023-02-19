import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    name: String,
    newDecision: String,
    restauration: String,
    sex: String,
    socialStatus: String,
    address: String,
    landmark: String,
    waNumber: String,
    phoneNumber: String,
    language: String,
    email: String,
    fbAccount: String,
    denomination: String,
    church: String,
    university: String,
    class: String,
    department: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const MemberDetails = mongoose.model('MemberDetails', memberSchema);

export default MemberDetails;