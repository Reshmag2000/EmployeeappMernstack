const express = require('express');
const router = express.Router();
const refreshTokenController = require('../../controllers/refreshTokenController');
const verifyJWT = require('../../middleware/verifyThis');

router.route('/')
    .get(verifyJWT, refreshTokenController.handleRefreshToken);

module.exports = router;