import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

interface Translator {
    id: number;
    name: string;
    lang: string;
}

const translators: Translator[] = [
    {
        id: 1,
        name: 'John Doe',
        lang: 'english'
    },
    {
        id: 2,
        name: 'Jane Doe',
        lang: 'spanish'
    }
];

app.get('/', (req, res) => {
    res.send('Sanity Check!');
});

app.get('/all', (req, res) => {
    res.send(translators);
});


app.get('/translator/findByLang', (req, res) => {
    const lang = req.query.lang;
    const result = translators.filter(t => t.lang === lang);
    res.json(result);
});

app.get('/translator/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const translator = translators.find(t => t.id === id);
    res.json(translator);
});

app.delete('/translator/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = translators.findIndex(t => t.id === id);
    translators.splice(index, 1);
    res.sendStatus(204);
});

app.post('/translator', (req: Request, res: Response) => {
    const item: Translator = JSON.parse(req.body);
    translators.push(item);
    res.status(201).json(item);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});