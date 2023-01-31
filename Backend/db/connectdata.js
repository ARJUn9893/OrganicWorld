const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OrganicsWorld', { useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology: true ,useFindAndModify:false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(' we are connected with database')
});


