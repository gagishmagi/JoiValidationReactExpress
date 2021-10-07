var mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.MONGO_CLOUD_USER}:${process.env.MONGO_CLOUD_PASS}@cluster0.v4fpt.mongodb.net/storeDB?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB is connected"))