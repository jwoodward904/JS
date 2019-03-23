// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Initial load in for table
data.forEach(function(tableData) {
 //   console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
 //     console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });



//test
var submit = d3.select("#filter-btn");

submit.on("click", function() {
// Prevent the page from refreshing
d3.event.preventDefault();
// clear table rows 
tbody.selectAll("td").remove();
//input date field
var inputField = d3.select("#datetime");
//input date value
var inputValue = inputField.property("value");

console.log(inputValue);

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

console.log(filteredData);

filteredData.forEach(function(filteredData) {
      // console.log(filteredData);
       var row = tbody.append("tr");
       Object.entries(filteredData).forEach(function([key, value]) {
        // console.log(key, value);
         var cell = tbody.append("td");
         cell.text(value);
       });
     });
  });



