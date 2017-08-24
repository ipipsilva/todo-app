const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//module.exports = mongoose.connect('mongodb://localhost/todo')
module.exports = mongoose.connect('mongodb://app:12345@ds159033.mlab.com:59033/todo')