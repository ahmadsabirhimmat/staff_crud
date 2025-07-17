import mongoose from "mongoose";
//! forth select that with which schema do i want to use, or create new one here
const contactSchema = mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    address:{
        type: String
    }
})

//! fifth we use mongoose model here we pass first parameter for collection name, second the schema name.
const contact = mongoose.model("Contact", contactSchema)
//! export the variable to use other file.
// module.exports = contact
export default contact