const dotenv = require('dotenv').config();
const message = require("./message");
const fs = require('fs');

const result = message.create("プァット","220048")
try {
    fs.writeFileSync('result.txt',result , 'utf8')
    console.log("Successfully!")
  } catch (err) {
    console.log(err)
  }