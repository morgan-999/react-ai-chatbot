import express from "express";
import cors from "cors";
import fs from "fs"; 



const PORT = 4000; // The port i want my back end to run at 

const app = express();
app.use(cors());
app.use(express.json());

// Load figure data
const figure = JSON.parse(fs.readFileSync("./figure.json", "utf8"));

const topics = figure.topics || {};
const responses = figure.responses || {};

function pickRandomResponses(responsesArray){
  if(!responsesArray || responsesArray.length === 0){
    return "I am not sure how to answer that";
  
  }

  const rand = Math.random();
  let cumulative = 0;

  for(const r of responsesArray) {
    cumulative += r.probability;
    if(rand <= cumulative) return r.text;
  
  }

  return responsesArray[0].text;
}


function searchResponse(text) {
  const lowerCase = text.toLowerCase().replace(/[^\w\s]/g,""); // This removes all punction used by the user
  const words = lowerCase.split(/\s+/); // splits input into individual words 

  const wordSet = new Set(words);

  for (const [topic, keywords] of Object.entries(topics))  {
    if (keywords.some((keyword) => {

      const lowerKeyword = keyword.toLowerCase().trim();

      return lowerKeyword.includes("")
      ? new RegExp(`\\b${lowerKeyword}\\b`).test(lowerCase)
      : wordSet.has(lowerKeyword);
    }))
    
    {
      return pickRandomResponses(responses[topic]);
    }

  }
  return "I am not sure how to answer that";
}

// It will search my scripts to see if it matches, if not listed, returns a default message


// When you run http://localhost:4000 it will say Historical figure API is running.
app.get("/", (req, res) => {
  res.send("Historical figure API is running.")
});


// Returns full information, currently about MLK
app.get("/api/figure", (req, res) => {
    res.json(figure);
});

// Returns MLK's name,birth,death
app.get("/api/figure/life", (req, res) => {
    res.json({
        name: figure.name,
        born: figure.born,
        died: figure.died

    });
});

// Returns MLK'S field of work
app.get("/api/figure/field", (req, res) => {
    res.json({field: figure.field});
});

app.get("/api/status", (req, res) => {
  res.status(200).json({ staus: 'ok'});
});




// This posts the message to the backend


 app.post("/api/message", (req,res) => {

  
  const userMessage = req.body.text?.toLowerCase().trim() || "";
  
  console.log("User's message:", userMessage);

  const result = searchResponse(userMessage);

  console.log("MLK's response:", result);

   res.json({ message : result });

 });

 

app.listen(PORT, () => {
  console.log("Historical figure API running at http://localhost:4000");
});