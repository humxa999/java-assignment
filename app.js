var button = document.getElementById('btn')
var screeen = document.getElementById('screeen')
var input = document.getElementById("input").value
var rest = document.getElementById('rest')
var work;


var count = +input
function start() {
    work = setInterval(function () {
        count++
        console.log(count)
        screeen.innerHTML = count
    }, 1000)

}
function stopCounter() {
    clearInterval(work);
    screeen.innerHTML = count
}
function reset() {
    count = 0
    screeen.innerHTML = count
}

button.addEventListener('click', function () {
    if (button.innerText == "Start") {
        start()
        button.innerText = "Stop"
    }
    else {
        stopCounter()
        console.log(count)
        button.innerText = "Start"

    }
})

rest.addEventListener('click', function () {
    count = 0
    screeen.innerHTML = count
    console.log("====", count)
})
