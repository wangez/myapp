import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import session from 'express-session'
import connect from 'connect-mongo'
import mongoose from 'mongoose'
import config from '../config/config'

import api from '../router'

const {main: {mainServerPort}} = config
const app = express();

const mongoURL = 'mongodb://localhost:27017/project'
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const MongoStore = connect(session)

app.use(session({
    secret: 'iqjmvh-178fd-fwh8f-cfenp',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60, // harlf of hour
    },
    store: new MongoStore({url: 'mongodb://localhost:27017/project', autoReconnect: true})
}));
// 设置静态资源，由于webpack打包时，写入html中的文件引用必须带有public，
// 所以必须为静态资源目录指定一个挂载路径
app.use('/public', express.static('public'));
app.use('/imgs', express.static('public/imgs'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

app.use('/api', api)

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

const server = app.listen(mainServerPort, e => {
    const serverhost = server.address().address;
    const serverport = server.address().port;

    console.log('app listening at http://%s:%s', serverhost, serverport);
});
