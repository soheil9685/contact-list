import { model , models , Schema } from "mongoose";

const userSchema = new Schema({
    firstName : {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 12,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 12,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 25
    },
    role: {
        type: String,
        trim: true,
        enum: ["user" , "admin"],
        default: "user"
    }
})

const User = models.User || model("User", userSchema)

export default User;