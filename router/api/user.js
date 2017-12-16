import { Router } from 'express'
import userdb from '../../db/user'

const user = Router()

user.all('/', (req, res) => {
    res.send('test for user');
});

user.post('/register', (req, res) => {
    const {username, passworld} = req.body
    userdb.findOne({username}, (err, doc) => {
        if (err) res.end('注册用户--查找用户是否存在--数据库查询失败')
        if (doc) {
            res.end('注册的用户已存在')
        } else {
            userdb.create({username, passworld}, err => {
                if (err) res.end('注册用户--保存用户--数据库保存失败')
                req.session.regenerate( err => {
                    if (err) {
                        res.end('登陆失败')
                    }
                    req.session.loginUser = doc.username
                    res.json({ret_code: 0, ret_msg: '登录成功'})
                })
                res.end('注册成功');
            })
        }
    })
});

user.post('/getLogined', (req, res) => {
    res.send(req.session.loginUser)
})

user.post('/login', (req, res) => {
    const {username, passworld} = req.body
    userdb.findOne({username}, (err, doc) => {
        if (err) res.end('用户登录--查找用户是否存在--数据库查询失败')
        if (doc) {
            if (doc.passworld !== passworld) {
                res.end('用户名或密码错误');
            }
            req.session.regenerate( err => {
                if (err) {
                    res.end('登陆失败')
                }
                req.session.loginUser = doc.username
                res.json({ret_code: 0, ret_msg: '登录成功'})
            })
        } else {
            res.end('用户名或密码错误');
        }
    })
});

user.post('/logout', (req, res) => {
    req.session.destroy(function(err) {
        if(err){
            res.json({ret_code: 2, ret_msg: '退出登录失败'});
            return;
        }
        res.end('推出');
    });
});

export default user