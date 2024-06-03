import express, { Request, Response, NextFunction } from "express";
import bearerToken from 'express-bearer-token';
import { verifyToken } from './middleware/auth';

const app = express();
app.use(bearerToken());
app.use(express.json());

const port = 3000;

interface Translator {
	id: number;
	name: string;
	lang: string;
}

const translators: Translator[] = [
	{
		id: 1,
		name: "John Doe",
		lang: "english"
	},
	{
		id: 2,
		name: "Jane Doe",
		lang: "spanish"
	}
];


app.get("/", verifyToken, (req, res) => {
	res.send("Sanity Check!");
});

/*ok*/
app.get("/all", verifyToken, (req, res) => {
	res.send(translators);
});

/*ok*/
app.get("/translator/findByLang", verifyToken, (req, res) => {
	const lang = req.query.lang;
	const result = translators.filter((t) => t.lang === lang);
	res.json(result);
});

/*ok*/
app.get("/translator/:id", verifyToken, (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const translator = translators.find((t) => t.id === id);
	res.json(translator);
});

/*ok*/
app.delete("/translator/:id", verifyToken, (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const index = translators.findIndex((t) => t.id === id);
	translators.splice(index, 1);
	res.sendStatus(204);
});

/*ok*/
app.post("/translator", verifyToken, (req: Request, res: Response) => {
	const item: Translator = {
		id: translators.length + 1,
		name: req.body.name,
		lang: req.body.lang
	};
	translators.push(item);
	res.status(201).json(item);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
