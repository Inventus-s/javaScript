let jokes = document.querySelector('.jokes')
let btn = document.getElementById("click");

const  getJoke=()=>{
    const setHeader = {
        headers : {
            Accept: "application/json"
        }
    }

    fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=8bc101c6042ab6efb9ba96d79f77',setHeader)
    .then((response) => response.json())
    .then((data)=>{
       jokes.innerHTML = data.jokeContent;  
    })
    .catch((err)=>console.log(err))
};

btn.addEventListener("click", getJoke);
getJoke();