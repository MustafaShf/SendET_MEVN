const mongoose=require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_CONN).then(
        console.log('db is connected')
    )
}

module.exports=connectToDb