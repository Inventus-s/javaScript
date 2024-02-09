let jokes = document.getElementsByClassName("jokes");
let btn = document.getElementById("click");


const  getJoke=()=>{
    const setHeader = {
        headers : {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com',setHeader)
    .then((response) => response.json())
    .then((data)=>{
       console.log(data);
    })
    .catch((err)=>console.log(err))
};

btn.addEventListener("click", getJoke);
getJoke();