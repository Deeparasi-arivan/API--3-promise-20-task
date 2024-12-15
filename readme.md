/*
! using promise and fetch
const res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json())
.then((result)=>console.log(result))
*/
/*
!using async -await
 async function foo(){
 const data = await fetch("https://restcountries.com/v3.1/all");
 const res = await data.json();
 console.log(res);
}
foo()
*/
//!async-await with error handling

async function foo(){
try {
const data = await fetch("https://restcountries.com/v3.1/all");
 const res = await data.json();
 console.log(res);
} catch (error) {
    console.log(error);
}
}
foo();


Async-Await
Error Handling

Async-Await:-
=> It is applicable to function 
=> A normal function can be converted into async function by using async keyword
=> It return a promise
=> Await keyword is used to handle async function
=> await is used inside the function
=> await is used for the replacement of .then
=> await help us to wait until the promise gets resolved.

 Error Handling
 . try -catch