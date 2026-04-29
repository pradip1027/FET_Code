let url = `http://www.omdbapi.com/?apikey=21e466bb&s=spiderman`;

//time taking task is known as promise

//predefined promise name is fetch

//to fetch data, there are 2 Ways
//then-catch method
//async-await method

// way - 1 : then-catch method

// fetch(url) // first promise
// .then(function(resolved) {
//     console.log(resolved); //response object //this is stream of data
                           
//     resolved.json() //to convert stream of data into json format // second promise
//     .then(function(resolved) {
//         console.log(resolved); //json data
//     })
//     .catch((rejected) => {
//         console.log(rejected); //error object
// })

// })

// .catch(function(rejected) {
//     // console.log("Rejected Part"); 
//     console.log(rejected); //error object
// })

// way - 2 : async-await method

async function getData() {
    let data = await fetch(url); // first promise
    let mydata = await data.json(); // second promise
    // console.log(data); //response object
    console.log(mydata); //json data
}

getData();