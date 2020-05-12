// jquery code goes here

$(document).ready(function () {


    //*************************** POST REQUEST *********************************//

    let $burgerSubmitBtn = $(".burgerSubmit");

    // 3. Burger data sent to server to be dealt with by mysql database using AJAX
    let saveNote = function (note) {
        // console.log(note);
        return $.ajax({
            url: "/api/addBurger",
            data: note,
            method: "POST"
        });
    };

    // 2. Send burger info to ajax function in form of an object for the server to use with mysql then reload
    let handleBurgerInfoDelivery = function () {
        let burgerData = document.querySelector("#usrform textarea").value;
        let burger = {
            burger_name: burgerData,
            devoured: false
        };

        saveNote(burger).then(function () {
            // Calls burger data updating content
            getAndRenderBurgers();
        });
    };


    // 1. Makes call to handleBurgerInfoDelivery
    $burgerSubmitBtn.on("click", handleBurgerInfoDelivery);


    //*************************** GET REQUEST *********************************//


    // 3. Render's the list of note titles past from the db
    let renderBurgerList = function (data) {
        location.reload();
    };


    // 2. A function for getting all notes from the db
    let getBurgers = function () {
        return $.ajax({
            url: "/api/burgers",
            method: "GET"
        });
    };

    // 1. Gets notes from the db
    let getAndRenderBurgers = function () {
        return getBurgers().then(function (data) {
            renderBurgerList(data);
        });
    };

    //getAndRenderBurgers();

    //*************************** PUT REQUEST *********************************//

    // 2. A function for updating a burger from the db
    var putBurger = function (id) {
        return $.ajax({
            url: "/api/burgers/" + id,
            method: "PUT"
        });
    };

    // 1. Click the burger
    var handleBurgerPut = function (id) {
        // prevents the click listener for the list from being called when the button inside of it is clicked

        putBurger(id).then(function () {
            location.reload();
        });
    };


    //***************************  INITIAL SETUP  ******************************************/

    (function () {
        // Set initial 
        let burgersMenu = document.querySelectorAll("#burgersDBdata #burgers div button");
        //console.log(burgersMenu);

        burgersMenu.forEach((burger) => {
            burger.addEventListener("click", function () { handleBurgerPut(this.getAttribute('data-id')) });
        });

    }());


}); 