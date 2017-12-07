import express from 'express'
import path from 'path'

const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    console.log('path /')
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/api', (req, res) => {
    console.log('path /api')
    res.send('111111');
});

app.get('/api/test', (req, res) => {
    console.log('request is get')
    res.send('111111');
});

const server = app.listen(3000, e => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});