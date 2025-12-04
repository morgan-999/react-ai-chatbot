import express from "express";
import cors from "cors";
import fs from "fs"; 


const PORT = 4000; // The port i want my back end to run at 

const app = express();
app.use(cors());
app.use(express.json());

// Load figure data
const figure = JSON.parse(fs.readFileSync("./figure.json", "utf8"));

// When you run http://localhost:4000 it will say Historical figure API is running.
app.get("/", (req, res) => {
  res.send("Historical figure API is running.")
});




// returns full information, currently about MLK
app.get("/api/figure", (req, res) => {
    res.json(figure);
});

// returns MLK's name,birth,death
app.get("/api/figure/life", (req, res) => {
    res.json({
        name: figure.name,
        born: figure.born,
        died: figure.died

    });
});

// returns MLK'S field of work
app.get("/api/figure/field", (req, res) => {
    res.json({field: figure.field});
});

// New code 26/11
// Scripted responses being used 

function pickRandom(responses) { //allows random responses to be picked
  const rand = Math.random(); 
  let cumulative = 0;

  for (const r of responses) {
    cumulative += r.probability;
    if (rand <= cumulative) return r.text;
  }
  return responses[0].text; 
}

// This posts the message to the backend
app.post("/api/message", (req,res) => {
  const userMessage = req.body.text.toLowerCase().trim();
  let botResponse = "I'm not sure how to answer that.";

  // if else statements regarding the users' message

  // if the message includes these strings, it will respond with one of my responses which include my greetings, farewells and activists
  if (
    userMessage.includes("hello")|| 
    userMessage.includes("hi")
    ) {
    botResponse= pickRandom(figure.responses.greetings);
  }
  else if (
    userMessage.includes("bye")||
    userMessage.includes("goodbye")|| 
    userMessage.includes("see you later")||
    userMessage.includes("soon")
    ) {
    botResponse= pickRandom(figure.responses.farewells);
  }
  else if (
    userMessage.includes("activists") 
    ) {
    botResponse= pickRandom(figure.responses.civil_rights_activists);
  
  }

    res.json({message: botResponse});

});
 
app.listen(PORT, () => {
  console.log("Historical figure API running at http://localhost:4000");
});