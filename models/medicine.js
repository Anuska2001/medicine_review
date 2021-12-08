const mongoose = require('mongoose')

var Medicine = mongoose.model('Medicine',{
    Mname: {type: String},
    RName: {type: String},
    review: {type: String}
});

module.exports = {Medicine};