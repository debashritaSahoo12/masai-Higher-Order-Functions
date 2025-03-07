let input= [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

let freq=input.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1;
    return (acc)
},{})
console.log(freq)
