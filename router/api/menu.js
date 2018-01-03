import { Router } from 'express'
import menudb from '../../db/menu'

const menu = Router()

menu.all('/', (req, res) => {
    res.send('test for menu');
});

menu.post('/getMenu', (req, res) => {
    const query = {}
    if (req.body.search) {
        // query.$or = [
        //     {title: new RegExp(req.body.search)},
        //     {bz: new RegExp(req.body.search)}
        // ]
        query.title = new RegExp(req.body.search)
    }
    menudb.find(query).then(doc => {
        res.json(doc)
    })
});

export default menu