import express from 'express';
import {addCustomer} from "../database/prisma-data-store";

const router = express.Router();

router.post("/add", async (req, res) => {
    const customer = req.body;
    try{

        await addCustomer(customer);
        res.send('Customer added successfully.');
    }
    catch (err){
        console.log('Error occured while adding customer');
    }
})
// router.get("/", (req, res) => {
//     res.json(showCustomers());
// })
// router.delete("/delete/:id", (req, res) => {
//     deleteCustomer(req.params.id)
//     res.send("Customer Deleted Successfully!")
// })
// router.put("/update/:id", (req, res) => {
//     updateCustomer(req.params.id, req.body)
//     res.send("Customer Updated Successfully!")
// })

export default router;