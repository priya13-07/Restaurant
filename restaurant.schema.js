const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required : true,
        minLength: 2,
        maxLength: 30,
        trim: true
    },

    address : {
        type: String, 
        required : true,
        trim: true
    },

    phone:{
        type : Number,
        required: false,
        unique: true
    },
    title:{
        type : String,
        required: true,
        
    },
    subtitle: {
        type: String,
        required: true,
        
    },
    dish: {
       type : String 
    }
},{
    timestamps: true ,
    versionKey: false
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = { Restaurant };
