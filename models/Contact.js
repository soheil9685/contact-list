import {models , model , Schema} from "mongoose";

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    phone: {
        type: String
    }
})

const Contact = models.Contact || model("Contact", ContactSchema)

export default Contact;