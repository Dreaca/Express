import express from 'express';
import {addCustomer,showCustomers} from "../database/data-store";

const router = express.Router();

router.use(express.json());

router.post("/add", (req, res) => {
    addCustomer(req.body)
    res.status(200).send("success")
})
router.get("/", (req, res) => {
    res.send(showCustomers());
})

export default router;