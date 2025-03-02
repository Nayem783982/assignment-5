let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
let dateString = today.toLocaleDateString("en-US", options);

document.getElementById('time').innerText = dateString;



function decrement() {
    const decrement = document.getElementById("decrement").innerText;
    const convertedDecrement = parseFloat(decrement);

    const decrementValue = convertedDecrement - 1;

    document.getElementById("decrement").innerText = decrementValue;



}


function increment() {
    const increment = document.getElementById("increment").innerText;
    const convertedIncrement = parseFloat(increment);

    const decrementValue = convertedIncrement + 1;

    document.getElementById("increment").innerText = decrementValue;

}




function getElementById(id) {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    const cardTitleValue = document.getElementById(id).innerText;
    const setValue = document.createElement("p")
    setValue.id = "appendChild"
    setValue.innerText ="You have completed the task "+ cardTitleValue + " " + timeString;
    const xxx = document.getElementById("clearData")
    xxx.appendChild(setValue);

}








let colors = ['#336699', '#86BBD8', '#2F4858', '#9EE493', '#DAF7DC', '#965D66', '#FF5733','#33FF57','#3357FF ','#FF33A8', '#A833FF ','#33FFF5 ','#FFD700','#FF8C00 ','#8B0000','#008080']

function changeBg() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

