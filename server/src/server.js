const app = require("./index");

const connect = require("./configs/db")

const port = process.env.Port || 5000;

app.listen(port, async () => {
    await connect();
    console.log(`Listening to port ${port}`);
})