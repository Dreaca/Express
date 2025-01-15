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