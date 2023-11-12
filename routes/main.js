const express = require('express');
const { displayData } = require('../controllers/main');
 const router = express.Router();

 router.get('/', displayData)

 module.exports = router