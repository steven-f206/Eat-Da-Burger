// jquery code goes here


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
    console.log(data);
    let burgers = document.querySelector("#burgersDBdata #burgers");
    let burgersDevoured = document.querySelector("#burgersDBdata #burgersDevoured");

    burgers.innerHTML = '';
    burgersDevoured.innerHTML = '';

    let burgersArray = [];
    let burgersDevouredArray = [];

    data.forEach((burger) => {
        if (burger.devoured === 0) {
            burgersArray.push(burger)
        } else if (burger.devoured === 1) {
            burgersDevouredArray.push(burger)
        }
    });

    console.log(burgersArray);

    burgersArray.forEach((burger) => {
        console.log('I am running');
        let li = document.createElement('li');
        li.innerHTML = burger.burger_name;
        li.setAttribute('data-id', burger.id);
        burgers.appendChild(li);
    });


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