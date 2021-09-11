const { model, Schema } = require('mongoose');
const mongoose = require('mongoose')

const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type: String,
        require:true,
        max: 50,
        unique: true
    },
    password:{
        type: String,
        require:true,
        min: 6
    },
    profilePicture:{
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type: Array,
        default:[]
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        default:"viewer"
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type: String,
        max:50
    },
    from:{
        type: String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }
},
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);
module.exports.User = User;