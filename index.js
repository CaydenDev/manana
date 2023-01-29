
const token = process.env['token']
const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
  sharding: true,
  ShardAmount: 2,
  token: token,
  prefix: "§"
})
bot.onMessage()

bot.command({
  name: "ping",
  code: ` $ping Pong! `
})


// express Pinglik webserver example code
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "<code>Hello, this project is using <a href='https://pinglik.eu' target='_blank'>Pinglik</a>!</code>"
  );
});

app.listen(port, () => {
  console.log(`📡 Pinglik webserver has started!`);
});


bot.command({
name: "play",
code: `$playSong[$message;15m;yes;yes;:x: Could not play song!]`
})

bot.command({
  name: "help",
  code: `$title[Help Menu] $description[My Prefix is **§** , use §play (song) to Play Music!`
})
