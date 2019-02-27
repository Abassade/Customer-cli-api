const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli',
{ useNewUrlParser: true })
.then( (data)=>{
    //console.info("mongodb conected");
    return;
})
.catch( err=>{
    console.info("error", err);
});

module.exports.db = db;