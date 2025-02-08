const mongoose=require('mongoose')

const emailSchema=mongoose.Schema({
        to: String,
        from: String,
        subject: String,
        body: String,
        isOpened: { type: Boolean, default: false },
        messageId: String,
})

let emailListModel=mongoose.model('emailList',emailSchema)
module.exports=emailListModel;

