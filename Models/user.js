const mongoose = require("mongoose")
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type: phone,
        required: true
    },
    smoker: {
        type: Boolean,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});
const users = mongoose.model("user", UsersSchema);
// users.createIndexes();
module.exports = users;