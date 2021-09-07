const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Daniel",
        "web": "github.com/DanielTroncosoG"

    }
    res.json(data);
});

module.exports = router;