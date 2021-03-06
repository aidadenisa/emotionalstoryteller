const router = require('express').Router();

const webhookService = require('../services/webhookService')

router.post("", async (req, res) => {
    var webhookrequest = req.body;
    const webhookresponse = await webhookService.webhook(webhookrequest);
    res.send(webhookresponse);
});

module.exports = router;