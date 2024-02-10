const tempLoad = () => {
    let temp  = document.querySelector('.temp');
    temp.innerHTML = '<i class="fa-solid fa-temperature-empty"></i>';

    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-quarter"></i>';
        temp.style.color = "#f8b627";
    },1000)
    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-half"></i>';
    },2000)
    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>';
    },3000)
    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-full"></i>';
        temp.style.color = "#d63031";
    },4000)
}


tempLoad();
setInterval(tempLoad,5000);