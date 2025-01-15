import {PrismaClient} from "@prisma/client";
import {Customer} from "../model/Customer";

const prisma = new PrismaClient();

export async function  addCustomer(customer :Customer){
    var newCustomer;
    try{
        newCustomer = await prisma.customer.create({
            data:{
                name: customer.name,
                email: customer.email,
            }
        })
        console.log('Customer Added')
    }catch (err){
        console.log('Error adding customer',err)
    }
}
export async function deleteCustomer(id:number){
    try{
        await prisma.customer.delete({
            where:{id:id}
        })
    }catch (err){
        console.log("Error occured while deleting customer",err);
    }
}
export async function updateCustomer(id:number, c:Customer){
    try{
        await prisma.customer.update({
            where:{id:id},
            data:{
                name: c.name,
                email: c.email,
            }
        })
    }catch (err){
        console.log("Error updating customer",err);
    }
}
export async function getAllCustomers(){
    try {
        return await prisma.customer.findMany()
    }catch (err){
        console.log("Error getting customers",err);
    }
}
