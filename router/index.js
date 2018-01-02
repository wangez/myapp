import { Router } from 'express'
import user from './api/user'
import menu from './api/menu'

const api = Router()

api.use('/user', user);
api.use('/menu', menu);

export default api