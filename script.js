$(document).ready(function () {
    tellJoke()
})
function tellJoke() {
    $.getJSON("https://v2.jokeapi.dev/joke/Any?safe-mode", function (data) {
    console.log(data.setup);

    $("#setup").html(data.setup)
    $("#delivery").html(data.delivery)
    })
}