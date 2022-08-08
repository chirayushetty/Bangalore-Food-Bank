const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();

app.use(cors());

// Connect Database
connectDB();
//Init Middleware
app.use(express.json());

app.get('/',(req,res) => res.send('API Running'));

//Defining Routes

app.use('/api/donor/', require('./routes/api/donor'));
app.use('/api/adminadd/', require('./routes/api/adminadd'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(5000,()=>{
    console.log("listening");
}
);