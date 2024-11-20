interface Customer{
     cId : number;
    cName : string;
    address : string;
}
class MidCustomer implements Customer{
    cId: number;
    cName: string;
    address: string;
    tele : string;

    constructor(cId:number, cName:string, address:string){
       this.cId = cId;
       this.cName = cName;
       this.address = address;
    }
    
    print(){
    console.log(this.cId, ": ", this.cName);
    }
    
    get getCId(){
        return this.cId;
    }
    get getName(){
        return this.cName;
    }
    get getAddress(){
        return this.address;
    }

    set setCId(cId:number){
        this.cId = cId;
    }
    set setCName(cName:string){
        this.cName = cName;
    }
    set setAddress(address:string){
        this.address = address;
    }


}
const customer = new MidCustomer(1,"John","Panadura");

console.log(customer.getCId);

class VIPCustomer implements Customer{
    cId: number;
    cName: string;
    address: string;

}
