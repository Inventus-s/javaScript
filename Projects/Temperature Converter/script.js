const calcTemp = () => {
    const degree = document.querySelector('.degree').value;
    const resultContainer = document.querySelector('.tempResult');
    const tempType = document.getElementById('temp');
    const tempValue = temp.options[tempType.selectedIndex].value;

    const celToFah = (cel) => {
        return Math.round((cel * 9/5) + 32);
    };

    const fahToCel = (fahr) => {
        return Math.round(((fahr - 32) * 5/9));
    };

    let result;

    if (tempValue == 'cel') {
        result = celToFah(degree);
        resultContainer.innerHTML = `${result}°Fahrenheit`;
    } else {
        result = fahToCel(degree);
        resultContainer.innerHTML = `${result}°Celsius`;
    }
}
