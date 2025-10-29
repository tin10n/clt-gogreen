import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
const app = express();
import cors from 'cors';
dotenv.config();
app.use(cors());

import OpenAI from 'openai';

app.use(express.json());

const openai = new OpenAI({
	apiKey: process.env.OPENAI_APIKEY,
});

//output: {"raw_output":"```json\n{\n  \"task\": \"Plant a tree in your community\",\n  \"point_value\": 5\n}\n```"}

app.post('/api', async (req, res) => {
	//used to have a theme related to the task
	const theme = [
		'waste reduction',
		'energy efficiency',
		'eco-friendly transportation',
		'recycling',
		'water conservation',
		'sustainable eating',
		'community service',
		'green tech or innovation',
		'biodiversity and wildlife',
		'climate awareness education',
	];
	const randomTheme = theme[Math.floor(Math.random() * theme.length)];
	const randomSeed = Math.floor(Math.random() * 10000);
	const systemPrompt = `
You are an eco-friendly task generator that creates unique, creative, and practical sustainability challenges based updone the theme of ${randomTheme}.

Each time you are called, you must generate a *different* eco-friendly task related to sustainability, recycling, energy saving, transportation, water use, or environmental awareness.

Assign a difficulty rating called "point_value" on a scale of 1–5 based on the effort required.
1 = very easy everyday habit (e.g., reuse a water bottle)
5 = high-effort or high-impact (e.g., plant 10 trees, carpool for a month)

Return your response strictly as a JSON object:
{
  "task": string,
  "point_value": number
}

Do not include explanations or formatting — only the JSON object.
(Seed: ${randomSeed})
`;

	try {
		const response = await openai.responses.create({
			model: 'gpt-4o-mini',
			input: [{ role: 'system', content: systemPrompt }],
			temperature: 0,
			max_output_tokens: 200,
		});

		const outputText = response.output_text.trim();

		// Attempt to parse JSON
		let data;
		try {
			data = JSON.parse(outputText);
		} catch {
			data = { raw_output: outputText };
		}
		console.log(data);
		res.json(data);
	} catch (err) {
		console.log(`Error ${err}`);
	}
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => console.log(`✅ Server running on http://localhost:${PORT}`));