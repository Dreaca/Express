import express from 'express';
import {addCustomer, deleteCustomer, getAllCustomers, updateCustomer} from "../database/prisma-data-store";

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
router.get("/", async (req, res) => {

    try{
         const customers = await getAllCustomers();
        res.send(customers);
    }catch (err){
        console.log('Error occurred while getting customer',err);
    }
})
router.delete("/delete/:id",async (req, res) => {
    try{
       await deleteCustomer(Number(req.params.id));
        res.send("Customer Deleted Successfully!")
    }catch (err){
        console.log('Error occurred while deleting customer',err);
    }
})
router.put("/update/:id", async (req, res) => {
    try {
        await updateCustomer(Number(req.params.id), req.body)
        res.send("Customer Updated Successfully!")
    }catch (err){
        console.log('Error occured while updating customer',err);
    }
})

export default router;