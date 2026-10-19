import {models , model , Schema} from "mongoose";

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 16
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 16
    },
    age: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 3
    },
    gender: {
        type: String,
        required: true,
        enum: ["female" , "male"]
    },
    phone: {
        type: String,
        required: true,
        match : /09\d{9}/,
        maxLength: 11
    }
})

const Contact = models.Contact || model("Contact", ContactSchema)

export default Contact;