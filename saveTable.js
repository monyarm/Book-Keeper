var myRows = [];
var headersText = [];
var $headers = $("th");

// Loop through grabbing everything
var $rows = $("tbody tr").each(function (index) {
    $cells = $(this).find("td");
    myRows[index] = {};

    $cells.each(function (cellIndex) {
        // Set the header text
        if (headersText[cellIndex] === undefined) {
            headersText[cellIndex] = $($headers[cellIndex]).text();
        }
        // Update the row object with the header/cell combo
        myRows[index][headersText[cellIndex]] = $(this).text();
    });
});

// Let's put this in the object like you want and convert to JSON (Note: jQuery will also do this for you on the Ajax request)
var myObj = myRows;
console.log(JSON.stringify(myObj));