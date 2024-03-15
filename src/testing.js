// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const admin = require("firebase-admin");
const serviceAccount = require("/Users/rando/woMENU/womenu-b3c9f-firebase-adminsdk-j91sk-17cdccc4e7.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

async function getMenuItems() {
  const docRef = db.collection("scraped_menus").doc("usc_menu");
  const doc = await docRef.get();
  if (doc.exists) {
    const data = doc.data();
    return data.menu_items || [];
  } else {
    return [];
  }
}

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCGwfpTgKqQKLLoWBCGQdYCORBK--nrxAI";

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  const menuItems = await getMenuItems();
  const fs = require("fs");

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: JSON.stringify(menuItems) }],
      },
      {
        role: "model",
        parts: [{ text: "" }],
      },
    ],
  });

  const result = await chat.sendMessage(
    "The list of foods provided is a dining hall menu. Using only the dishes in the list, make a sample meal plan for students who are on their period. Provide a brief explanation after each complete meal."
  );
  const response = result.response;
  console.log(response.text());

  // fs.writeFile("data.json", JSON.stringify(response.text()), (err) => {
  //   if (err) throw err;
  //   console.log("Data has been saved to data.json");
  // });

  fs.writeFile("data.json", JSON.stringify(response), (err) => {
    if (err) throw err;
    console.log("Data has been saved to data.json");
  });
}

runChat();
