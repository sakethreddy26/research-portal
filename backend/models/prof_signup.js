const mongoose = require('mongoose');


const departmentEnum = ['CSE', 'ECE']; 
const campusEnum = ['RR', 'EC', 'HN']; 

const professorSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(), 
    },
    empId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phno: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        enum: departmentEnum,
        required: true,
    },
    campus: {
        type: String,
        enum: campusEnum,
        required: true,
    },
    panNo: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    expertise: {
        type: String,
        required: true,
    },
    dateofJoining: {
    },
    totalExpBfrJoin: {
        type: String,
        required: true,
    },
    googleScholarId: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Professor1', professorSchema, 'professor1');
