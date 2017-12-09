import express from 'express'
import user from '../../db/user'

const api = express.Router()
api.all('/', (req, res) => {
    res.send('test for api');
});

api.post('/register', (req, res) => {
    const username = req.body.username;
    const passworld = req.body.passworld;
    user.findOne({username: username}, (err, doc) => {
        if (err) console.log('注册用户--查找用户是否存在--数据库查询失败')
        if (doc) {
            console.log('注册的用户已存在')
        } else {
            console.log('注册的用户没有重复，开始保存注册信息')
            user.create({username, passworld}, saveerr => {
                if (saveerr) console.log('注册用户--保存用户--数据库保存失败')
                res.end('1212');
            })
        }
    })
});

export default api