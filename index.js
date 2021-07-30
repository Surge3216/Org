const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require("dotenv");
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

dotenv.config()

//middleWare
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.get('/', (req, res)=>{
    res.send('welcome')
})

app.get('/users', (req, res)=>{
    res.send('welcome to user page')
})

app.listen(8080, ()=>{
     console.log('backend server is running')
})

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, ()=>{
    console.log('connected')
});