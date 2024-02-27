import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true,
    },
    firstname: {
        type: String,
        required:true,
    },
    lastname: {
        type: String,
        required:true,
    },
    location: String,
    description:String,
    picturePath: String,
    userPicturePath: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Map,
        default: [],
    }
}, {timestamps:true});

const Post = mongoose.model("Post", postSchema);

export default Post;