class Mkulima {

    constructor(farms,products,orders) {
      this.farms = [];
      this.products = [];
      this.orders = [];
        
          }
        } 
class removeFarm{
    constructor(){
    this.farms = [];
    this.products = [];
    this.orders = [];       
    
        }
      }
      addFarm(farmid,name,farmer,phoneNumber,address){
        let farm={
            farmid:farmid,
            name :name,
            farmer:farmer,
            phoneNumber:phoneNumber,
        }
        this.farms.push(farm);
        return this.farms
      }


         
          
getFarm(farmid){
    for(var a=0;a<this.farms.length;a++){
        let farm = this.farms[a];
        if(farm.farmid===farmid){
            return farm;
        }
    }

}
removeFarm(farmid){
    let farm=this.getFarm(farmid);
    let index=this.farm.indexOf(farm);
    this.farm.splice(index,1)

}
updateFarm(farmid,name,farmer,phoneNumber,address){
    let newFarm=this.farm.find(newFarm=>newFarm.farmer=="Quava")
    newFarm={
        armid=farmid,
            name =name,
            farmer=farmer,
            phoneNumber=phoneNumber,
            address=address,

    }
    this.farms.push(newFarm)
    return this.farms.push(farm)
}
addProduct(productid,name,price){
    let product={
        productid:productid,
        name:name,
        price:price,
    }
    return this.product.push(product);
// }
getProduct(productid){
    for(var i=0<this.product.length;i++){
        let product=this.products[i];
        if(this.products,productid===productid){
            return product;
        }
    }

}
removeProduct(productid){
    let product=this,getProducts(productid);
    let index=this.product.indexOf(product);
    this.products.splice(index,1)
}
updateProduct(productid,name,price){
    let newProduct=this.product.find(newProduct=>newProduct,name=="watermelon")
    newProduct={
        productid:productid,
        name:name,
        price,price,
    }
}
printProduct(){
    for(items of this.products){
        console.log([items.name+" , " items.price])
    }
}
calculateOrderCost(productid,quality){
    let cost=this.products.find(cost=>cost.productid==productid)
    return cost.price*quality;
}
let order=new Mkulima();
 
 console.log(order.addFarm("2138721364yruew","PLanet farm","Nanasi","43759821","kitui"));
 console.log(order.addFarm("Gishagi","That one-shop farm","Lee Muirir","2039498735","makueni"));
 console.log(order.getFarm("2138721364yruew"));
 console.log(order.removeFarm("Gishagi"));
 console.log(order.addProduct("maah","avocados",500 ));
 console.log(order.addProduct("yumm","totmatoes",1600));
 console.log(order.getProduct("yumm"))
 console.log(order.removeProduct("maah"));
 console.log(order.updateProduct("maah","quava",800));
 order.printProduct()
 console.log(order.calculateOrderCost("yumm",9));

