const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')
const dotenv = require("dotenv");
const { MONGODB } = require('./config')
const morgan = require("morgan")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const bioRoute = require('./routes/bio')
const challengeRoute = require('./routes/challenge')

dotenv.config()

//middleWare
app.use(express.json());
app.use(morgan('common'));
app.use(cors())

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/bio", bioRoute)
app.use("/api/challenge", challengeRoute )

app.get('/', (req, res)=>{
    res.send('welcome')
})

app.get('/users', (req, res)=>{
    res.send('welcome to user page')
})


if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

  mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .then((res) => {
    console.log(`Server running`);
  })
  .catch(err => {
    console.error(err)
  })