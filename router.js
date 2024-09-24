const express = require('express');
const router = express.Router();
const aje = require('../controller/ajeController');


router.get('/', aje.index);
router.get('/about', aje.about);
router.get('/blog', aje.blog);
router.get('/contacts', aje.contacts);
router.get('/service', aje.service);
router.get('/testimonial', aje.testimonial);

module.exports = router;