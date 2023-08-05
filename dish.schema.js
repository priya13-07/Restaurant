const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DishSchema = new Schema({
    name: {
        type: String,
        required : true,
        trim: true
    },

    description : {
        type: String, 
        required : true,
        trim: true
    },

    veg_nonveg:{
        type : Boolean,
    },
   
    ingredients: {
        type: Array,
        required: true,
        
    },
    
},{
    timestamps: true ,
    versionKey: false
});

const Dish = mongoose.model("Dish", DishSchema);

module.exports = { Dish };
