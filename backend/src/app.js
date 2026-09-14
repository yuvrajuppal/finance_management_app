import fs from 'fs';
import express from "express";
import swaggerUi from 'swagger-ui-express'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import cookieParser from 'cookie-parser'
import cors from 'cors'

app.use(cookieParser());

app.use(
	cors(
		{
		origin: (origin, callback) => {
		if (!origin) {
		return callback(null, true)
		}
		return callback(null, origin)
		},
		credentials: true,
		}
	)
)





const swaggerData = JSON.parse(fs.readFileSync('./swagger-output.json', 'utf-8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerData));






export default app;