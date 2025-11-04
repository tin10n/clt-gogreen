import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
const app = express();
import cors from 'cors';
dotenv.config();
app.use(cors());
app.use(express.json());
import OpenAI from 'openai';
import apiRoutes from './routes/index.js';
import db from './db.js'
// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
	apiKey: process.env.OPENAI_APIKEY,
});

app.use('/api', apiRoutes);

//output: {"raw_output":"```json\n{\n  \"task\": \"Plant a tree in your community\",\n  \"point_value\": 5\n}\n```"}

app.post('/api/task', async (req, res) => {
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

Each time you are called, you must generate a *different* eco-friendly task related to sustainability, recycling, energy saving, transportation, water use, or environmental awareness. (15 words)

Assign a difficulty rating called "point_value" on a scale of 1–5 based on the effort required. Make 5 total task with the difficulty 1,2,3,4,5.
1 = very easy everyday habit (e.g., reuse a water bottle)
5 = high-effort or high-impact (e.g., plant 10 trees, carpool for a month)
Also add a complete key that is always false
Return your response strictly as a JSON object:
{
  "task": string,
  "point_value": number,
  "complete" : false
}

Do not include explanations or formatting — only the JSON object with the array variable being userTask.
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

// Submit total points
app.post('/submit-points', async (req, res) => {
	try {
		const { points_earned } = await req.body;
		console.log('Incoming request body:', req.body);

		console.log('Points received:', points_earned);
		let beanCount = await points_earned;
		console.log('BeanCount: ' + beanCount);
		res.send({ message: 'Points saved successfully!', total: beanCount });
	} catch (err) {
		console.log('Error' + err);
		res.send(err);
	}

	// const points_earned = req.body?.points_earned; // safe optional chaining

	// if (typeof points_earned !== 'number') {
	// 	return res.status(400).json({ error: 'Invalid points_earned', body: req.body });
	// }

	// // TODO: save points to database here
});



app.use(express.static(path.join(__dirname, '../client/dist')));

app.get(/^\/(?!api).*/, (req, res) => {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => console.log(`✅ Server running on http://localhost:${PORT}`));
