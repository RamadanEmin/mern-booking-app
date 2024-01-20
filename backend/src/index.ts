import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(7000, () => {
    console.log('Server running on localhost:7000');
});