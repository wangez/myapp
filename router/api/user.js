import { Router } from 'express'
import userdb from '../../db/user'

const user = Router()

user.all('/', (req, res) => {
    res.send('test for user');
});


user.post('/login', (req, res) => {
    const {username, password, remember} = req.body
    userdb.findOne({username}, (err, doc) => {
        if (err) {
            res.json({success: false, msg: '用户登录--查找用户是否存在--数据库查询失败'})
            return
        }
        if (doc) {
            if (doc.password !== password) {
                res.json({success: false, msg: '用户名或密码错误'})
            } else {
                req.session.regenerate( err => {
                    if (err) {
                        res.json({success: false, msg: '登陆失败'})
                    } else {
                        if (remember) {
                            req.session.cookie.maxAge = null
                        }
                        req.session.loginUser = username
                        res.json({success: true, msg: '登录成功'})
                    }
                })
            }
        } else {
            res.json({success: false, msg: '用户名或密码错误'})
        }
    })
});

user.post('/register', (req, res) => {
    const {username, password, withLogin} = req.body
    userdb.findOne({username}, (err, doc) => {
        if (err) {
            res.json({success: false, msg: '注册用户--查找用户是否存在--数据库查询失败'})
            return
        }
        if (doc) {
            res.json({success: false, msg: '注册的用户已存在'})
        } else {
            userdb.create({username, password}, err => {
                if (err) {
                    res.json({success: false, msg: '注册用户--保存用户--数据库保存失败'})
                    return
                }
                if (withLogin) {
                    req.session.regenerate( err => {
                        if (err) {
                            res.json({success: false, msg: '注册成功，登陆失败'})
                        } else {
                            req.session.loginUser = username
                            res.json({success: true, msg: '注册并登陆成功'})
                        }
                    })
                } else {
                    res.json({success: true, msg: '注册成功'})
                }
            })
        }
    })
});

user.post('/getLogined', (req, res) => {
    if (req.session.loginUser) {
        res.json({success: true, msg: req.session.loginUser})
    } else {
        res.json({success: false})
    }
})


user.post('/logout', (req, res) => {
    req.session.destroy(function(err) {
        if(err){
            res.json({success: false, msg: '退出登录失败'})
            return;
        }
        res.json({success: true, msg: '退出成功'})
    });
});

export default user