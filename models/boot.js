var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BootSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
    },

    size: {
        type: Number,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    watch: {
        type: Boolean,
        required: true,
        default: false
    },

    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }]
});

var Boot = mongoose.model("Boot", BootSchema);

module.exports = Boot;