var sightings = dataSet;
var submit = d3.select("#submit");
var tbody = d3.select("tbody");

submit.on("click", function() {

  d3.event.preventDefault();

  var inputElement = d3.select("#alien-form-input");
  var inputValue = inputElement.property("value");

  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach((filteredSighting) => {
      var row = tbody.append("tr");
      Object.entries(filteredSighting).forEach(([key, value]) => {
        var cell = tbody.append("td").classed("table table-striped", true);
        cell.text(value);
      });
    });
});

