const express = require('express');
const { ShowData, ShowParticularData, CreateData, UpdateData, DeleteData } = require('../controllers/crud.controller');
const router = express.Router();



router.route("/data").get(ShowData);
router.route("/data/:id").get(ShowParticularData);
router.route("/data/add").post(CreateData);
router.route("/data/update/:id").put(UpdateData);
router.route("/data/delete/:id").delete(DeleteData);

module.exports = router