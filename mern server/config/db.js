const mongoose = require("mongoose")

const conectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://harisdb:handsome45@cluster0.lljjv.mongodb.net/Auth?retryWrites=true&w=majority")
        console.log("mongodb connected")
        return connection
    } catch (error) {
        console.log(error)
    }

}

module.exports = conectDB