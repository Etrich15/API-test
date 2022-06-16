$(document).ready(function () {
    tellJoke()
    newJoke()
})
function tellJoke() {
    $.getJSON("https://v2.jokeapi.dev/joke/Any?safe-mode", function (data) {
        console.log(data.setup);

        $("#setup").html(data.setup)
        $("#delivery").html(data.delivery)
    })

}
function newJoke() {
    $("#newjoke").click(function (event) {
        event.preventDefault();
        tellJoke();
    })
}