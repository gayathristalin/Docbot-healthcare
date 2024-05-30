// const express = require("express");
// const axios = require("axios");
// require("dotenv").config(); // Load environment variables from .env file

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// // Define route to interact with OpenAI API
// app.post("/api/chat", async (req, res) => {
//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/completions",
//       {
//         model: "gpt-3.5-turbo", // Change this to the desired model name//gpt-3.5-turbo
//         prompt: req.body.prompt,
//         max_tokens: 150,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );

//     res.json(response.data.choices[0].text.trim());
//   } catch (error) {
//     console.error(
//       "Error:",
//       error.response ? error.response.data : error.message
//     );
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// // Sample data - health issues and their remedies
// const remedies = {
//   fever:
//     "Drink plenty of fluids and get plenty of rest. Over-the-counter medications like acetaminophen or ibuprofen can help reduce fever.",
//   headache:
//     "Rest in a quiet, dark room. Apply a cold compress to your forehead. Over-the-counter pain relievers such as aspirin, ibuprofen, or acetaminophen may help.",
//   "sore throat":
//     "Gargle with warm salt water, drink plenty of warm fluids, such as tea with honey and lemon. Over-the-counter pain relievers such as acetaminophen or ibuprofen can help alleviate pain.",
//   cough:
//     "Stay hydrated by drinking plenty of fluids. Use cough drops or hard candies. Honey can soothe a cough. Over-the-counter cough suppressants or expectorants may be helpful.",
//   "stomach ache":
//     "Avoid solid foods for a few hours. Try drinking clear liquids or sucking on ice chips. Over-the-counter antacids or acid blockers may help.",
//   nausea:
//     "Drink clear or ice-cold drinks. Eat light, bland foods such as saltine crackers or plain bread. Avoid fried, greasy, or sweet foods.",
//   diarrhea:
//     "Stay hydrated by drinking plenty of clear liquids. Avoid certain foods like dairy products, caffeine, and fatty or greasy foods. Over-the-counter anti-diarrheal medications may help.",
//   "muscle pain":
//     "Rest the affected muscle and apply ice to reduce pain and swelling. Take over-the-counter pain relievers such as ibuprofen or acetaminophen.",
//   allergies:
//     "Avoid allergens as much as possible. Use over-the-counter antihistamines or decongestants. Nasal saline sprays or rinses may help alleviate symptoms.",
//   insomnia:
//     "Establish a regular sleep schedule. Create a relaxing bedtime routine. Avoid caffeine and electronics before bedtime. Consider relaxation techniques such as meditation or deep breathing exercises.",
// };

// // Handle incoming messages
// app.post("/message", (req, res) => {
//   const { message } = req.body;
//   const remedy = remedies[message.toLowerCase()];
//   let response;
//   if (remedy) {
//     response = remedy;
//   } else {
//     response =
//       "I'm sorry, I don't have information on that health issue. Please try another one.";
//   }
//   res.json({ response });
// });

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());
// const remedies = {
//   fever: [
//     "Drink plenty of fluids.",
//     "Get plenty of rest.",
//     "Use over-the-counter medications like acetaminophen or ibuprofen.",
//     "Keep the body cool with a damp cloth.",
//     "Take a lukewarm bath.",
//   ],
//   headache: [
//     "Rest in a quiet, dark room.",
//     "Apply a cold compress to the forehead.",
//     "Take over-the-counter pain relievers like aspirin, ibuprofen, or acetaminophen.",
//     "Stay hydrated.",
//     "Practice relaxation techniques such as deep breathing.",
//   ],
//   "sore throat": [
//     "Gargle with warm salt water.",
//     "Drink warm fluids like tea with honey and lemon.",
//     "Take over-the-counter pain relievers like acetaminophen or ibuprofen.",
//     "Use throat lozenges.",
//     "Rest the voice.",
//   ],
//   cough: [
//     "Stay hydrated by drinking plenty of fluids.",
//     "Use cough drops or hard candies.",
//     "Consume honey to soothe the throat.",
//     "Take over-the-counter cough suppressants or expectorants.",
//     "Use a humidifier to moisten the air.",
//   ],
//   "stomach ache": [
//     "Avoid solid foods for a few hours.",
//     "Drink clear liquids or suck on ice chips.",
//     "Use over-the-counter antacids or acid blockers.",
//     "Apply a warm compress to the abdomen.",
//     "Practice relaxation techniques to reduce stress.",
//   ],
//   nausea: [
//     "Drink clear or ice-cold drinks.",
//     "Eat light, bland foods like saltine crackers or plain bread.",
//     "Avoid fried, greasy, or sweet foods.",
//     "Use over-the-counter anti-nausea medications.",
//     "Take slow, deep breaths.",
//   ],
//   diarrhea: [
//     "Stay hydrated by drinking plenty of clear liquids.",
//     "Avoid dairy products, caffeine, and fatty or greasy foods.",
//     "Use over-the-counter anti-diarrheal medications.",
//     "Eat small, frequent meals.",
//     "Rest and avoid strenuous activity.",
//   ],
//   "muscle pain": [
//     "Rest the affected muscle.",
//     "Apply ice to reduce pain and swelling.",
//     "Take over-the-counter pain relievers like ibuprofen or acetaminophen.",
//     "Use heating pads or warm towels.",
//     "Stretch gently to relieve tension.",
//   ],
//   allergies: [
//     "Avoid allergens as much as possible.",
//     "Use over-the-counter antihistamines or decongestants.",
//     "Use nasal saline sprays or rinses.",
//     "Keep windows closed during high pollen seasons.",
//     "Wash bedding frequently in hot water.",
//   ],
//   insomnia: [
//     "Establish a regular sleep schedule.",
//     "Create a relaxing bedtime routine.",
//     "Avoid caffeine and electronics before bedtime.",
//     "Practice relaxation techniques like meditation or deep breathing exercises.",
//     "Ensure the bedroom is dark and quiet.",
//   ],
// };

// app.post("/message", (req, res) => {
//   const { message } = req.body;
//   const remedy = remedies[message.toLowerCase()];
//   let response;
//   if (remedy) {
//     response = remedy;
//   } else {
//     response =
//       "I'm sorry, I don't have information on that health issue. Please try another one.";
//   }
//   res.json({ response });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// const remedies = {
//   fever: [
//     "Drink plenty of fluids.",
//     "Get plenty of rest.",
//     "Use over-the-counter medications like acetaminophen or ibuprofen.",
//     "Keep the body cool with a damp cloth.",
//     "Take a lukewarm bath.",
//   ],
//   // Other health issues and remedies...
// };

// app.post("/message", (req, res) => {
//   const { message } = req.body;
//   const remedy = remedies[message.toLowerCase()];
//   let response;
//   if (remedy) {
//     response = remedy;
//   } else {
//     response =
//       "I'm sorry, I don't have information on that health issue. Please try another one.";
//   }
//   res.json({ response });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
app.use(bodyParser.json());

// Allow all origins for demonstration purposes
app.use(cors());

const remedies = {
  fever: [
    "Drink plenty of fluids.",
    "Get plenty of rest.",
    "Use over-the-counter medications like acetaminophen or ibuprofen.",
    "Keep the body cool with a damp cloth.",
    "Take a lukewarm bath.",
  ],
  headache: [
    "Rest in a quiet, dark room.",
    "Apply a cold compress to the forehead.",
    "Take over-the-counter pain relievers like aspirin, ibuprofen, or acetaminophen.",
    "Stay hydrated.",
    "Practice relaxation techniques such as deep breathing.",
  ],
  "sore throat": [
    "Gargle with warm salt water.",
    "Drink warm fluids like tea with honey and lemon.",
    "Take over-the-counter pain relievers like acetaminophen or ibuprofen.",
    "Use throat lozenges.",
    "Rest the voice.",
  ],
  cough: [
    "Stay hydrated by drinking plenty of fluids.",
    "Use cough drops or hard candies.",
    "Consume honey to soothe the throat.",
    "Take over-the-counter cough suppressants or expectorants.",
    "Use a humidifier to moisten the air.",
  ],
  "stomach ache": [
    "Avoid solid foods for a few hours.",
    "Drink clear liquids or suck on ice chips.",
    "Use over-the-counter antacids or acid blockers.",
    "Apply a warm compress to the abdomen.",
    "Practice relaxation techniques to reduce stress.",
  ],
  nausea: [
    "Drink clear or ice-cold drinks.",
    "Eat light, bland foods like saltine crackers or plain bread.",
    "Avoid fried, greasy, or sweet foods.",
    "Use over-the-counter anti-nausea medications.",
    "Take slow, deep breaths.",
  ],
  diarrhea: [
    "Stay hydrated by drinking plenty of clear liquids.",
    "Avoid dairy products, caffeine, and fatty or greasy foods.",
    "Use over-the-counter anti-diarrheal medications.",
    "Eat small, frequent meals.",
    "Rest and avoid strenuous activity.",
  ],
  "muscle pain": [
    "Rest the affected muscle.",
    "Apply ice to reduce pain and swelling.",
    "Take over-the-counter pain relievers like ibuprofen or acetaminophen.",
    "Use heating pads or warm towels.",
    "Stretch gently to relieve tension.",
  ],
  allergies: [
    "Avoid allergens as much as possible.",
    "Use over-the-counter antihistamines or decongestants.",
    "Use nasal saline sprays or rinses.",
    "Keep windows closed during high pollen seasons.",
    "Wash bedding frequently in hot water.",
  ],
  insomnia: [
    "Establish a regular sleep schedule.",
    "Create a relaxing bedtime routine.",
    "Avoid caffeine and electronics before bedtime.",
    "Practice relaxation techniques like meditation or deep breathing exercises.",
    "Ensure the bedroom is dark and quiet.",
  ],
};

app.post("/message", (req, res) => {
  const { message } = req.body;
  const remedy = remedies[message.toLowerCase()];
  let response;
  if (remedy) {
    response = remedy;
  } else {
    response =
      "I'm sorry, I don't have information on that health issue. Please try another one.";
  }
  res.json({ response });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
