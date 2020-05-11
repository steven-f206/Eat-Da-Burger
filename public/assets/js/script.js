// jquery code goes here

let $burgerSubmitBtn = $(".burgerSubmit");

// 3. Burger data senT to server to be dealt with by mysql database using AJAX
let saveNote = function (note) {
    console.log(note);
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

    saveNote(burger).then(function (burger) {
        console.log(burger);

    });
};


// 1. Makes call to handleBurgerInfoDelivery
$burgerSubmitBtn.on("click", handleBurgerInfoDelivery); 