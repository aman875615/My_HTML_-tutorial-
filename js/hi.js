

//temporal dead zone
// let and const ke sath hota hai 
// jab tak variable declare nahi hota tab tak uska use nahi kar skte hai
// isliye hamesha let ya const ka use karna chahiye
// var ke sath nahi hota hai
// var ke sath variable ko declare karne se pehle bhi use kar skte hai
// isliye var ka use nahi karna chahiye
// console.log(x); // error aayegi
//line no 11 se lin3e number 16 tk temporal dead zone me hai
// let x=10; // ydi yaha pr x ko declare karte hai to error nahi aayegi
//  console.log(x); // ab error nahi aayegi

//question111111111111111111111111111111111111
// console.log(x);
// console.log("AMan");
// console.log("this side is aman");
// {
//     let x=10;
//     console.log(x);
// }


// try catch ka use error ko handle karne ke liye kiya jata hai
//try vala code run hota hai ydi usme error aati hai to catch vale code me jatew hai 
// kuchh bhi error ki jagah pr likhva skte hai
//question2222222222222222222222222222222222222222
// try{
//     console.log("my name is aman");
//     console.log(x);                     //ydi error aati hai to catch me jate hai ydi nahi aati to catch me nahi jate hai directvly finally me jate hai
//     console.log("this side is aman")
// }
// catch(ju){
//     console.log("MY NAME IS AMAN");
//     console.log("find error MY side is aman",ju);
//     console.log("this side is verma");   
// }
// finally{
//     console.log(" mai to hmesha chalunga chahe error aaye ya na aaye");
// }

//question33333333333333333333333333333333333333
//throw ka use error ko throw karne ke liye kiya jata hai
// ydi hum khud se error throw karna chahte hai to throw ka use karte hai
// throw ke sath hum string, number, boolean, object kuch bhi throw kar skte hai
// throw ke sath hum apna custom error message bhi de skte hai

// try{
//     console.log(x);
// }catch(ju){
//   throw new Error("this is custom error message");  
// }




let errorCode = 100;
if(errorCode === 100){
    throw new Error("Invalid json format");
}