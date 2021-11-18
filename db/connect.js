const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://darksiend:ANRanr123@nodetaskmanager.yubg1.mongodb.net/NodeTaskManager?retryWrites=true&w=majority'

const connectDB = (url) => {

 return mongoose
        .connect(connectionString, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify:false,
                useUnifiedTopology: true 
        })
        .then(() => console.log('CONNECTED TO THE DB'))
        .catch((err) => console.log(err))


}

module.exports = connectDB