import { Router } from 'express'
import showmenudb from '../../db/show'

const show = Router()

show.all('/', (req, res) => {
    res.send('test for show');
});

show.post('/getMenu', (req, res) => {
    showmenudb.find({}).then(doc => {
        res.json(doc)
    })
});

export default show