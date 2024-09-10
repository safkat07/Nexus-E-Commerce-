import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userRole: {
        type: String,
        enum: ['admin', 'buyer', 'seller'],
        required: true,
    },
    userAvatar: {
        type: String
    }
})




export const User = mongoose.model("User", userSchema)