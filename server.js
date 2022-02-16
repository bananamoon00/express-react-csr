"use strict";

require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");
const app = express();
const mongoose = require ('mongoose');
const db = require("./schema.js");

app.get("/home", async (req, res) => {
    const data = await db.find();
    res.send({ data: data });
});

mongoose.connect(process.env.MONGODB);
app.listen(5000);