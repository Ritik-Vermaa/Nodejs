const express = require("express");
const path = require("path")
const app = express();
const PORT = 8003;
const { connectDB } = require('./connection');
const userRoutes = require('./routes/User');
const urlRoute = require('./routes/url')
const URL = require('./models/url');
const staticRoute = require("./routes/staticRouter")


connectDB('mongodb://localhost:27017/Authentication').then(() => {
    console.log("Db Connected");
})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/user", userRoutes);
app.use("/url", urlRoute);
app.use("/" , staticRoute);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        }
    });
    res.redirect(entry.redirectURL);
})




app.listen(PORT, () => {
    console.log("Server Started at Port", `${PORT}`);
})