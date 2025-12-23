import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId, // Type of user._id
            ref: "User", // This ObjectId refers to a document in the User collection, this is how we create relationships
            required: true
        },
        recieverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: {
            type: String
        },
        image: {
            type: String
        }
    },
    { timestamps: true }
)

const Message = mongoose.model("Message", messageSchema)

export default Message;