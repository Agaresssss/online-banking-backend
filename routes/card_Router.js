const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('card router');
}
);


module.exports = router;