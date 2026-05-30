import express from "express";
import web3Routes from './routes/web3Routes'

const app = express();
app.use(express.json())

app.get("/health", (req, res) => {
    return res.json({heath: "good"});
})

app.use('/web3', web3Routes);

app.listen(8080, () => {
    console.log("listening the port");
})