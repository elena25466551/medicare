const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
        userName: {
                type: String,
                required: true
        },
        userEmail: {
                type: String,
                required: true,
                unique: true
        },
        userPassword: {
                type: String,
                required:true
        },
        isActive: {
                type: Boolean,
                default: true
        },
        userSpecialty: {
                type: String
        }
}, {
        timestamps: true,
        versionKey: false
});

module.exports = model("User", UserSchema);