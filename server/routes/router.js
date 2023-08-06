import express from 'express';
import * as Controller from "../controllers/app.controller.js"

const router = express.Router()


router.route('/createUser').post(Controller.createUser)
router.route('/login').post(Controller.loginUser)

export default router