import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


app.get('/',(req, res) => {
    res.send('Hireloop server is running');

})


app.listen(port, () => {
    console.log(`Hireloop server is running on port: ${port}`)
});

