const mongoose = require("mongoose");

const { Schema } = mongoose;

const article = new Schema(
  {
    titleOne: String, // String is shorthand for {type: String}
    titleTwo: String, // String is shorthand for {type: String}
    genre: String,
    aticleBody: [
      { type:{       
        imageOne: String,
        subTitle: String,
        content: String, 
      }
      }
    ],    
    created_date: Date,
    updated_date: Date,
  },
  { versionKey: false }
);
module.exports = mongoose.model("articles", article);
