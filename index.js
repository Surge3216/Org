const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')
const dotenv = require("dotenv");

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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, ()=>{
    console.log('connected')
});