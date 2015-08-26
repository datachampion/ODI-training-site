var mydata = {};
//mydata.header = "London Waterloo";
//mydata.summary = "Train departures";

// Get a json serialisation of our data into a variable called json_string
//var json_string = JSON.stringify(mydata);
// Output the raw data into the data node
//$('rawdata').html(json_string);


// Output the Header and Summary
//$('header').html(mydata.header);
//$('summary').html(mydata.summary);

// API request details (Dave's API key)
mydata.appid = "634299aa";
mydata.apikey = "7b4ec66edce9e504c722304fcbac4c39";

mydata.station = "WAT";

mydata.url = "http://transportapi.com/v3/uk/train/station/" + mydata.station + "/live.json?app_id=" + mydata.appid + "&api_key=" + mydata.apikey;


// Create function to load data
$.getJSON(mydata.url, function(data) {

  station_name = data.station_name;
  summary = data.date;

  $('header').html(station_name);
  $('summary').html(summary);

  items = data.departures.all;
  $.each(items, function(index,item) {
    // Process each item
    var time = document.createElement("td");
    var departsIn = document.createElement("td");
    var platform = document.createElement("td");
    var destination = document.createElement("td");

    time.innerHTML = item["aimed_departure_time"];
    departsIn.innerHTML = item["best_departure_estimate_mins"]
    platform.innerHTML = item["platform"];
    destination.innerHTML = item["destination_name"];

    var row = document.createElement("tr");
    row.appendChild(time);
    row.appendChild(departsIn);
    row.appendChild(platform);
    row.appendChild(destination);

    $('#data').append(row);
  });
});
