const a=[1,2,4,5,6,7,9];
const even=a.filter((i)=>i%2==0);
console.log("a=",a);
console.log("Even=",even);
const sum=even.reduce((i,s)=>(i+s));
console.log("sum=",sum);