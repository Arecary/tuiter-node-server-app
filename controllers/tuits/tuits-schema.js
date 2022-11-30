import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   avatarIcon: String,
                                   userName: String,
                                   handle: String,
                                   time: String,
                                   title1: String,
                                   link: String,
                                   title2: String,
                                   image: String,
                                   content: String,
                                   content2: String,
                                   replies: Number,
                                   retuits: Number,
                                   likes: Number,
                                   dislikes: Number,
                                   liked: Boolean,
                               }, {collection: 'tuits'});
export default schema;