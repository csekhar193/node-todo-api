const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://csekhar193:w433iqoq@ds137281.mlab.com:37281/todoapp' || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {mongoose};