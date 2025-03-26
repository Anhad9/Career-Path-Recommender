import { GoogleGenAI } from "@google/genai";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());

const apiKey = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

async function getOpinion(content) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: content,
        config: {
            maxOutputTokens: 3000,
            temperature: 0.85,
        }
    });
    return response.text;
}

app.get("/ai/response", async (req, res) => {
    try {
        let content = JSON.stringify(req.query);
        let prompt = "You are an excellent career path recommender and your task is to help out people in chosing the most optimal career for them.";
        prompt += "\nGiven the form data, suggest the optimal career path for this person, you should ONLY RECOMMEND THE CAREER OPTION and nothing else! Maximum 3 words and dot reposnd in markdown!\n\n";
        prompt += content;
        
        console.log("checkpoint");
        const response = await getOpinion(prompt);

        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(error.message);
        process.exit(0);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});