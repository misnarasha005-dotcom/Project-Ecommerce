const express = require('express');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoute');



const router = express.Router();

router.use('/user',userRoutes)
router.use('/product',productRoutes)


module.exports = router;