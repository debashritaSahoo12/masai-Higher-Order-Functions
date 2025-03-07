let arr = [
  {
    name: "Laptop",
    price: 1000,
  },
  {
    name: "Mouse",
    price: 20,
  },
];
function processProducts(arr){
 let narr=arr.map((ele)=>{
 return ele.name
 })
 narr.forEach((ele,i) => {
    let item=arr[i]
    if(item.price>50){
        console.log(`${ele} is above $50`);
    }else{
        console.log(`${ele} is below $50`);
    }
 }
);
}
processProducts(arr)
