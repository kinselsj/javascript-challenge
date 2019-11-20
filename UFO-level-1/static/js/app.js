// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// looping through data set and appending rows using arrow functions

tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
// getting input element

    tbody.html("");

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value")

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    console.log(filteredData);
});