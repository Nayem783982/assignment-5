document.getElementById("box")
    .addEventListener('click', function () {
        decrement();
        increment();
        alert("Board Updated Successfully")
        getElementById("card-title1");

        this.disabled = true
    })


document.getElementById("box1")
    .addEventListener('click', function () {
        decrement();
        increment();
        alert("Board Updated Successfully")
        getElementById("card-title2");

        this.disabled = true
    })


document.getElementById("box2")
    .addEventListener('click', function () {
        decrement();
        increment();
        alert("Board Updated Successfully")
        getElementById("card-title3");

        this.disabled = true
    })



document.getElementById("box3")
    .addEventListener('click', function () {
        decrement();
        increment();
        alert("Board Updated Successfully")
        getElementById("card-title4");

        this.disabled = true
    })


document.getElementById("box4")
    .addEventListener('click', function () {
        decrement();
        increment();
        alert("Board Updated Successfully")
        getElementById("card-title5");

        this.disabled = true
    })


document.getElementById("box5")
    .addEventListener('click', function () {
        decrement();
        increment();
        alert("Board Updated Successfully")

        getElementById("card-title6");
        this.disabled = true;
    })


document.getElementById("ClearHistoryBtn")
    .addEventListener('click', function () {
        let parent = document.getElementById("clearData")
        parent.innerText = ""
    })





const zxc =document.getElementById("decrement").innerText
if (zxc === "1"){
    alert("hello mama")
}
