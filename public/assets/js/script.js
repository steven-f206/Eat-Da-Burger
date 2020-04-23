// jquery code goes here

var $saveNoteBtn = $(".save-note");

// A function for saving a note to the db
var saveNote = function (note) {
    console.log(note);
    return $.ajax({
        url: "/api/test",
        data: note,
        method: "POST"
    });
};

var handleNoteSave = function () {
    var newNote = {
        title: "hi",
        text: "Got this?"
    };

    saveNote(newNote).then(function (data) {
        console.log(data);
    });
};


$saveNoteBtn.on("click", handleNoteSave); 