const { Router } = require('express');

const router = Router();

const { main } = require('../../utils/mainRoute.js');

router.get('/', (req, res) => {
	res.status(200).json(main);
});

module.exports = router;
