import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String },
        address: [{ detail: { type: String }, for: { type: String } }],
        phoneNumber: [{ type: Number }],
    },
    {
        timestamps: true,
    }
);

// attachments for user schema
UserSchema.methods.generateJwtToken = function () { };

// helper functions for user schema
UserSchema.statics.findByEmailAndPhone = async () => { };
// finding user using email and password
UserSchema.statics.findByEmailAndPassword = async () => { };

export const UserModel = mongoose.model("users", UserSchema);