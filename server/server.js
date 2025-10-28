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
