const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("Connection Successful"))
.catch((err)=>console.log(err));

const playlistSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  profession:String,
  age:Number,
  date:{
    type:Date,
    default:Date.now
  }
})

const Playlist = new mongoose.model("Playlist",playlistSchema);

const createDocument = async() =>{
  try{
    const reactPlaylist = new Playlist({
      name:"Tarun",
      profession:"Developer",
      age:27,
    })
    const result = await reactPlaylist.save();
    console.log(result);
  }catch(err){
    console.log(err);
  }
}

createDocument();