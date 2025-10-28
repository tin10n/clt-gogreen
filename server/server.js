import path from 'path';
import cors from 'dotenv';
import express from 'express';
const app = express();
import cors from 'cors';
require('dotenv').config();
app.use(cors());

import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_APIKEY,
});

app.post('/api', async (req, res) => {
	const systemPrompt = `Sample System prompt`;

	try {
		const prompt = 'this will be the prompt';
		const response = await openai.responses.create({
			model: 'gpt-4.1-mini',
			input: [
				{ role: 'system', content: systemPrompt },
				{ role: 'user', content: prompt },
			],
		});
	} catch (err) {}
});
