import { Router } from 'express'
import user from './api/user'
import show from './api/show'

const api = Router()

api.use('/user', user);
api.use('/show', show);

export default api