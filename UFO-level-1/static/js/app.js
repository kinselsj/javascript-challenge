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
