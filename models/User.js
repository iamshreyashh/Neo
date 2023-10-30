import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            min: 2,
            max: 50,
            },
            LastName:
            {
            type: String,
            required: true,
            min: 2,
            max: 50, 
            },
            Email:
            {
                type: String,
                required: true,
                max: 50,
                unique: true,
            },
            Password:
            {
                type: String,
                required: true,
                min: 5, 
            },
            picturepath:
            {
                type: String,
                defaul:"",
            },
            friends:
            {
                type: Array,
                default:[],
            },
            location: String,
            occupation: String,
            viewedProfile: Number,
            impressions: Number,
        }, {timestamps: true});

        const User = mongoose.model("User", UserSchema);
        export default User;